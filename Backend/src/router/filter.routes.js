import express from "express";
import { filterProperties } from "../controllers/filter.js";

const router = express.Router();

router.post('/', filterProperties);

export default router;
