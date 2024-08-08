import express from "express";
import { delateUser, getUser, updateUser, users } from "../controllers/users.js";
import { authMiddleware } from "../middlewares/sessionMiddlewares.js";
import { checkRole } from "../middlewares/roleMiddlewares.js";
import { validatorObtainUserID, validatorUpdateUser } from "../validator/users.js";


const router = express.Router();

router.get('/',authMiddleware, checkRole(["admin"]) , users )
router.get('/:id', validatorObtainUserID, authMiddleware, checkRole(["admin"]), getUser )
router.put('/:id', validatorUpdateUser, authMiddleware, checkRole(["admin"]), updateUser)
router.delete('/:id', validatorObtainUserID, authMiddleware, checkRole(["admin"]), delateUser)

export default router