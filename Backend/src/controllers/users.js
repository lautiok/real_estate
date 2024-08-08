import User from "../models/user.models.js";
import { handleHttpError } from "../utils/handleError.js";

export const users = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      handleHttpError(res, "ERROR AL TRAER LOS USUARIOS");
    }
  };

  export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      handleHttpError(res, "ERROR AL TRAER EL USUARIO");
    }
  };
  
  export const delateUser = async (req, res) => {
    try {
      const { id } = req.params;
      if (id === req.user.id) {
        res.send("NO PUEDES ELIMINAR TU PROPIO USUARIO");
        return;
      }
      await User.findByIdAndDelete(id);
      res.send('USUARIO ELIMINADO');
    } catch (error) {
      handleHttpError(res, "ERROR AL ELIMINAR EL USUARIO");
    }
  };

  export const updateUser = async (req, res) => {
    try {
       const { id } = req.params;
       const userExists = await User.findById(id);
       if (!userExists) {
         res.status(404).json({ message: "USUARIO NO ENCONTRADO" });
         return;
       }
       const { name, lastname, email, role } = req.body;
       const user = await User.findByIdAndUpdate(id, { name, lastname, email, role });
       res.json(user);
      } catch (error) {
      handleHttpError(res, "ERROR AL ACTUALIZAR EL USUARIO");
    }
  }