import { handleHttpError } from "../utils/handleError.js";
import { verifyToken } from "../utils/handleJwt.js";
import  User  from "../models/user.models.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return handleHttpError(res, "NO ESTAS AUTENTICADO", 401);
    }
    const dataToken = verifyToken(token);
    if (!dataToken._id) {
      return handleHttpError(res, "NO ESTAS AUTENTICADO", 401);
    }
    
    const user = await User.findById(dataToken._id);
    req.user = user;
    next();
  } catch (error) {
    handleHttpError(res, 'ERROR DE AUTENTICACIÓN', 401);
    console.log(error);
  }
};
