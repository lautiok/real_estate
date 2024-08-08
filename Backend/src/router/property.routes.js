import express from "express";
import {deleteProperty, getProperties, getPropertiesByOwner } from "../controllers/property.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
import { checkRole } from "../middlewares/roleMiddlewares.js";


const router = express.Router();

router.get('/', getProperties )
router.get('/:id', authMiddleware,  checkRole(["admin", "seller"]) ,getPropertiesByOwner )
router.delete('/:id', authMiddleware,  checkRole(["admin", "seller"]) ,deleteProperty )
export default router