import { check } from "express-validator";
import validateRes from "../utils/handleValidatorImg.js";
import validate from "../utils/handleValidator.js";
export const validatorcreatePropertySale = [
  check("direccion").exists().notEmpty(),
  check("localidad").exists().notEmpty(),
  check("descripcion").exists().notEmpty(),
  check("provincia").exists().notEmpty(),
  check("mcuadrados").exists().notEmpty(),
  check("ambientes").exists().notEmpty(),
  check("dormitorios").exists().notEmpty(),
  check("banos").exists().notEmpty(),
  check("contacto").exists().notEmpty(),
  check("propertyType").exists().notEmpty(),
  check("price").exists().notEmpty(),
  check("owner").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateRes(req, res, next);
  },
];

export const validatorObtainPropertySaleID = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validate(req, res, next)
  }
]