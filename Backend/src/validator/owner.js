import { check } from "express-validator";
import validate from "../utils/handleValidator.js";

export const validatorCreateOwner = [
    check("name").exists().notEmpty(),
    check("lastname").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("phone").exists().notEmpty(),
    check("identification").exists().notEmpty(),
    check("numberidentification").exists().notEmpty(),
    (req, res, next) => {
        return validate(req, res, next)
    }
]

export const validatorgetOwner = [
    check("id").exists().notEmpty().isMongoId(), 
    (req, res, next) => {
        return validate(req, res, next)
    }
]