import { check } from "express-validator";
import validate from "../utils/handleValidator.js";

export const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("lastname").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  check("role").exists().notEmpty().isIn(["admin", "seller"]),
  (req, res, next) => {
    return validate(req, res, next);
  },
];

export const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  (req, res, next) => {
    return validate(req, res, next);
  },
];


export const validatorToken = [
  check("token").exists().notEmpty(),
  (req, res, next) => {
    return validate(req, res, next);
  },
]