import Owner from "../models/owner.models.js";
import { matchedData } from "express-validator"; 
import { handleHttpError } from "../utils/handleError.js";

export const createOwner = async (req, res) => {
  try {
    const { name, lastname, email, phone, identification, numberidentification } = matchedData(req);
    const owner = new Owner({ name, lastname, email, phone, identification, numberidentification });
    const emailExist = await Owner.findOne({ email});
    if (emailExist) {
      return res.status(400).json({ message: "El email ya existe" });
    }
    if (identification === "DNI" && numberidentification.length > 8) {
      return res.status(400).json({ message: "La identificacion debe tener como maximo 8 digitos" });
    }
    if (identification === "Pasaporte" && numberidentification.length > 11) {
      return res.status(400).json({ message: "la debe tener como maximo 11 digitos" });
    }
    const identificatios = await Owner.findOne({ numberidentification });
    if (identificatios) {
      return res.status(400).json({ message: "La identificación ya existe" });
    }
    await owner.save();
    res.status(201).json(owner);
  } catch (error) {
    handleHttpError(res, 'ERROR AL CREAR PROPIETARIO')
  }
};

export const getOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (error) {
    handleHttpError(res, 'ERROR AL OBTENER PROPIETARIOS')
  }
};

export const getOwner = async (req, res) => {
  try {
    req = matchedData(req)
    const owner = await Owner.findById(req.id);
    res.status(200).json(owner);
  } catch (error) {
    handleHttpError(res, 'ERROR AL OBTENER PROPIETARIO')
  }
};


export const updateOwner = async (req, res) => {
  try {
    const { name, lastname, email, phone, identification, numberidentification } = matchedData(req);
    const owner = await Owner.findByIdAndUpdate(req.params.id, { name, lastname, email, phone, identification, numberidentification });
    res.status(200).json(owner);
  } catch (error) {
    handleHttpError(res, 'ERROR AL ACTUALIZAR PROPIETARIO')
  }
};

export const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    await Owner.findByIdAndDelete(id);
    res.send('PROPIETARIO ELIMINADO');
  } catch (error) {
    handleHttpError(res, 'ERROR AL ELIMINAR UN PROPIETARIO')
  }
}