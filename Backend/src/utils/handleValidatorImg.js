import { validationResult } from "express-validator";
import fs from 'fs-extra';

const validateRes = async (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);

    if (req.files && req.files.images && req.files.images.tempFilePath) {
      try {
        await fs.remove(req.files.images.tempFilePath);
      } catch (fsError) {
        console.error('Error al eliminar el archivo temporal:', fsError);
        res.send({ error: 'Error al eliminar el archivo temporal' });
        return;
      }
    } else {
      console.error('tempFilePath no encontrado en la solicitud');
    }

    res.send({ error: error.array() });
  }
};

export default validateRes;