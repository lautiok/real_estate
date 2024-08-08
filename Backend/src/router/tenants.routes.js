import express from "express";
import { createTenant, deleteTenant, getTenant, getTenants, updateTenant } from "../controllers/tenants.js";
import { validatecreateTenant, validatorGetTenant } from "../validator/tenants.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";


const router = express.Router();

router.post("/", authMiddleware , validatecreateTenant, createTenant)
router.get("/", authMiddleware, getTenants)
router.get ("/:id", authMiddleware, validatorGetTenant, getTenant)
router.put("/:id", authMiddleware , validatorGetTenant, updateTenant)
router.delete("/:id", authMiddleware, validatorGetTenant, deleteTenant)


export default router