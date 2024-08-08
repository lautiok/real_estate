import { deleteImage, uploadImage } from "../config/cloudinary.js";
import PropertySale from "../models/propertySale.models.js";
import { matchedData } from "express-validator";
import fs from "fs-extra";
import { handleHttpError } from "../utils/handleError.js";
import Owner from "../models/owner.models.js";

export const createPropertySale = async (req, res) => {
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
      buyers,
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
    const newPropertySale = new PropertySale({
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
      buyers,
      images: uploadedImages,
      propertyType,
    });
    await newPropertySale.save();

    await Owner.findByIdAndUpdate(owner, {
      $push: { propeties: newPropertySale._id },
    });
    res.status(201).json(newPropertySale);
  } catch (error) {
    handleHttpError(res, 'ERROR AL CREAR UNA PROPIEDAD EN VENTA')
  }
};

export const getPropertiesSale = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const propertiesSale = await PropertySale.find().limit(limit).skip(offset);
    res.status(200).json(propertiesSale);
  } catch (error) {
    handleHttpError(res, 'ERROR AL OBTENER PROPIEDADES EN VENTA')
  }
};


export const getPropertySale = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req;
    const propertySale = await PropertySale.findById(id);
    res.status(200).json(propertySale);
  } catch (error) {
    handleHttpError(res, 'ERROR AL OBTENER UNA PROPIEDAD EN VENTA')
  }
}


export const updatePropertySale = async (req, res) => {
  try {
    const { id } = req.params;
    const propertySale = await PropertySale.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(propertySale);
  } catch (error) {
    handleHttpError(res, 'ERROR AL ACTUALIZAR UNA PROPIEDAD EN VENTA')
  }
}


export const detalePropertySale = async (req, res) => {
  try {
    const { id } = req.params;
    const propertySale = await PropertySale.findByIdAndDelete(id);
    if (propertySale.images.length) {
      await Promise.all(
        propertySale.images.map((image) => deleteImage(image.public_id))
      );
    }
    await Owner.findByIdAndUpdate(propertySale.owner, {
      $pull: { propeties: propertySale._id },
    });
    res.status(200).json(propertySale);
  } catch (error) {
    handleHttpError(res, 'ERROR AL ELIMINAR UNA PROPIEDAD EN VENTA')
  }
}