import Tenant from "../models/tenants.models.js";
import { handleHttpError } from "../utils/handleError.js";
import { matchedData } from "express-validator";

export const createTenant = async (req, res) => {
    try {
        const {name,lastname, email, phone, identification, numberidentification} = matchedData(req)
        const tenant = new Tenant({name, lastname, email, phone, identification, numberidentification})
        const emailExist =  await Tenant.findOne({email})
        if (emailExist) {
            return res.status(400).json({ message: 'El email ya existe'})
        }
        await tenant.save()
        res.status(201).json(tenant)
    } catch (error) {
        handleHttpError(res, 'ERROR AL CREAR UN NUEVO INQUILINO')
    }
}

export const getTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.status(200).json(tenants);
    } catch (error) {
        handleHttpError(res, 'ERROR AL OBTENER TODOS LOS INQUILINOS')
    }
}

export const getTenant = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req;
        const tenant = await Tenant.findById(id);
        res.status(200).json(tenant);
    } catch (error) {
        handleHttpError(res, 'ERROR AL OBTENER UN INQUILINO')
    }
}

export const updateTenant = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTenant = await Tenant.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedTenant);
    } catch (error) {
        handleHttpError(res, 'ERROR AL ACTUALIZAR UN INQUILINO')
    }
}

export const deleteTenant = async (req, res) => {
    try {
        const { id } = req.params;
        await Tenant.findByIdAndDelete(id);
        res.status(200).send({ message: "Tenant deleted" });
    } catch (error) {
        handleHttpError(res, 'ERROR AL ELIMINAR UN ALQUILINO')
    }
}