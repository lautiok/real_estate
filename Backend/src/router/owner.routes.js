import express from "express";
import {createOwner, deleteOwner, getOwner, getOwners, updateOwner } from "../controllers/owner.js";
import { validatorCreateOwner, validatorgetOwner } from "../validator/owner.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
import { checkRole } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

router.post("/", authMiddleware, checkRole(["admin", "seller"]), validatorCreateOwner , createOwner)
router.get("/", authMiddleware , checkRole(["admin", "seller"]), getOwners)
router.get("/:id", authMiddleware, validatorgetOwner, getOwner)
router.put("/:id", authMiddleware, validatorgetOwner, validatorCreateOwner, updateOwner)
router.delete("/:id", authMiddleware, checkRole(["admin", "seller"]), deleteOwner)

export default router