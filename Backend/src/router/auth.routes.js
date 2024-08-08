import express from "express";
import { validatorLogin, validatorRegister, validatorToken } from "../validator/auth.js";
import { login, logout, register, TokenValidation, } from "../controllers/auth.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
import { checkRole } from "../middlewares/roleMiddlewares.js";


const router = express.Router();

router.post("/register", authMiddleware, checkRole(["admin"]) ,  validatorRegister, register)
router.post("/login", validatorLogin, login)
router.post("/verify", validatorToken, TokenValidation )
router.post("/logout",  logout)


export default router