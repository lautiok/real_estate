import { check } from "express-validator";
import validate from "../utils/handleValidator.js";
export const validatorObtainUserID = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
      return validate(req, res, next)
    }
  ]

  export const validatorUpdateUser = [
    check("id").exists().notEmpty().isMongoId(),
    check("name").exists().notEmpty(),
    check("lastname").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("role").exists().notEmpty().isIn(["admin", "seller"]),
    (req, res, next) => {
      return validate(req, res, next)
    }
  ]