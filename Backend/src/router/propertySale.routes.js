import express from "express";
import { createPropertySale, detalePropertySale, getPropertiesSale, getPropertySale, updatePropertySale } from "../controllers/propertySale.js";
import { validatorcreatePropertySale, validatorObtainPropertySaleID } from "../validator/propertySale.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
const router = express.Router();

router.post("/", authMiddleware , validatorcreatePropertySale , createPropertySale)
router.get("/", getPropertiesSale)
router.get("/:id", validatorObtainPropertySaleID, getPropertySale)
router.put ("/:id", authMiddleware, validatorObtainPropertySaleID, updatePropertySale)
router.delete("/:id", authMiddleware, validatorObtainPropertySaleID, detalePropertySale)


export default router