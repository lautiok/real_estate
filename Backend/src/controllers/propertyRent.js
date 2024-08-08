import { deleteImage, uploadImage } from "../config/cloudinary.js";
import PropertyRent from "../models/propertyRent.models.js";
import { matchedData } from "express-validator";
import fs from "fs-extra";
import { handleHttpError } from "../utils/handleError.js";
import Owner from "../models/owner.models.js";

export const createPropertyRent = async (req, res) => {
  try {
    const {
      direccion,
      localidad,
      descripcion,
      provincia,
      mcuadrados,
      ambientes,
      dormitorios,
      banos,
      contacto,
      price,
      owner,
      tenants,
      propertyType,
    } = matchedData(req);

    if (!req.files || !req.files.images) {
      return res.status(400).json({ message: "Es necesario subir al menos una imagen" });
    }

    const imageFiles = Array.isArray(req.files.images) ? req.files.images : [req.files.images];

    const uploadedImages = await Promise.all(
      imageFiles.map(async (file) => {
        const imageRes = await uploadImage(file.tempFilePath);
          await fs.remove(file.tempFilePath);
        return {
          url: imageRes.secure_url,
          public_id: imageRes.public_id,
        };
      })
    );

    const newPropertyRent = new PropertyRent({
      direccion,
      localidad,
      descripcion,
      provincia,
      mcuadrados,
      ambientes,
      dormitorios,
      banos,
      contacto,
      price,
      owner,
      tenants,
      images: uploadedImages,
      propertyType,
    });

    await newPropertyRent.save();

    await Owner.findByIdAndUpdate(owner, {
      $push: { properties: newPropertyRent._id },
    });

    res.status(201).json(newPropertyRent);
  } catch (error) {
    handleHttpError(res, "ERROR AL CREAR PROPIEDAD EN RENTA");
  }
};


export const getPropertiesRent = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const propertiesRent = await PropertyRent.find().limit(limit).skip(offset);
    res.status(200).json(propertiesRent);
  } catch (error) {
    handleHttpError(res, "ERROR AL OBTENER PROPIEDADES EN RENTA");
  }
};

export const getPropertyRent = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const propertyRent = await PropertyRent.findById(id);
    res.status(200).json(propertyRent);
  } catch (error) {
    handleHttpError(res, "ERROR AL OBTENER PROPIEDAD EN RENTA");
  }
};

export const updatePropertyRent = async (req, res) => {
  try {
    const { id } = req.params;
    const propertyRent = await PropertyRent.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(propertyRent);
  } catch (error) {
    handleHttpError(res, "ERROR AL ACTUALIZAR PROPIEDAD EN RENTA");
  }
};

export const deletePropertyRent = async (req, res) => {
  try {
    const { id } = req.params;
    const propertyRent = await PropertyRent.findByIdAndDelete(id);
    if (propertyRent.images.length) {
      await Promise.all(
        propertyRent.images.map((image) => deleteImage(image.public_id))
      );
    }
    await Owner.findByIdAndUpdate(propertyRent.owner, {
      $pull: { properties: propertyRent._id },
    });

    res.status(200).json(propertyRent);
  } catch (error) {
    handleHttpError(res, "ERROR AL ELIMINAR PROPIEDAD EN RENTA");
  }
};
