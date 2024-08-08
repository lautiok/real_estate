import express from "express";
import {createPropertyRent, getPropertiesRent, getPropertyRent, deletePropertyRent, updatePropertyRent} from "../controllers/propertyRent.js";
import {validatorcreatePropertyRent, validatorObtainPropertyRentID} from '../validator/propertyRent.js'
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
const router = express.Router();

router.post("/", authMiddleware,  validatorcreatePropertyRent, createPropertyRent)
router.get("/", getPropertiesRent)
router.get("/:id", validatorObtainPropertyRentID ,getPropertyRent)
router.put("/:id", authMiddleware, validatorObtainPropertyRentID, updatePropertyRent)
router.delete("/:id", authMiddleware, validatorObtainPropertyRentID,deletePropertyRent)

export default router