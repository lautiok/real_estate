import PropertyRent from "../models/propertyRent.models.js";
import PropertySale from "../models/propertySale.models.js";
import { handleHttpError } from "../utils/handleError.js";

export const getProperties = async (req, res) => {
    try {
        const propertiesRent = await PropertyRent.find();
        const propertiesSale = await PropertySale.find();
        res.status(200).json([...propertiesRent, ...propertiesSale]);
    } catch (error) {
        handleHttpError(res, 'ERROR AL OBTENER TODAS LAS PROPIEDADES')
    }
}

// retornar propiedades por id del propietario
export const getPropertiesByOwner = async (req, res) => {
    try {
        const {id} = req.params
        const propertiesRent = await PropertyRent.find({ owner: id })
        const propertiesSale = await PropertySale.find({ owner: id })
        res.status(200).json([...propertiesRent, ...propertiesSale])
    } catch (error) {
        handleHttpError(res, 'ERROR AL OBTENER PROPIEDADES POR ID DEL PROPIETARIO')
    }
}


// elimar propiedad por id
export const deleteProperty = async (req, res) => {
    try {
        const {id} = req.params
        const propertyRent = await PropertyRent.findByIdAndDelete(id)
        const propertySale = await PropertySale.findByIdAndDelete(id)
        res.status(200).json({propertyRent, propertySale})
    } catch (error) {
        handleHttpError(res, 'ERROR AL ELIMINAR PROPIEDADE')
    }
}