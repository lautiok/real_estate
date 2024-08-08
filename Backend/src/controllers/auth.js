import User from "../models/user.models.js";
import { matchedData } from "express-validator";
import { handleHttpError } from "../utils/handleError.js";
import { encryptPassword, comparePassword } from "../utils/handlePassword.js";
import { signToken, verifyToken } from "../utils/handleJwt.js";
import { transporter } from "../config/nodemailer.js";

export const register = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await User.findOne({ email: req.email });
    if (user) {
      res.status(400).send({ message: "El usuario ya existe" });
      return;
    }
    const passwordHash = await encryptPassword(req.password);
    const boby = { ...req, password: passwordHash };
    const dataUser = await User.create(boby);
    dataUser.set("password", undefined, { strict: false });

    const token = signToken(dataUser);

    const data = {
      token,
      user: dataUser,
    };
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: dataUser.email,
      subject: "Bienvenido a RentSale",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center;">
          <h1 style="color: #333;">Hola ${dataUser.name} ${dataUser.lastname}</h1>
          <p style="color: #555;">Se ha dado de alta tu cuenta en nuestra web RentSale</p>
          <p style="color: #555;">Tu correo es: <strong>${req.email}</strong></p>
          <p style="color: #555;">Tu contraseña es: <strong>${req.password}</strong></p>
          <a href="${process.env.FRONTEND_URL}login" style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 16px; color: white; background-color: #8489FF; border-radius: 5px; text-decoration: none;">Iniciar Sesión</a>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR AL REGISTRAR");
  }
};

export const login = async (req, res) => {
  try {
    req = matchedData(req);
    const userf = await User.findOne({ email: req.email }).select(
      "password email role name lastname"
    );
    if (!userf) {
      res.status(400).send({ message: "El usuario no existe" });
      return;
    }
    const passwordHash = userf.password;
    const check = await comparePassword(req.password, passwordHash);
    if (!check) {
      res.status(400).send({ message: "La contraseña es incorrecta" });
      return;
    }
    userf.set("password", undefined, { strict: false });
    const user = await User.findOne({ email: req.email });

    const token = signToken(userf);

    res.cookie("token", token);
    res.send({ user });
  } catch (error) {
    handleHttpError(res, "ERROR AL INICIAR SESION");
  }
};

export const TokenValidation = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.send(false);

    const compararToken = verifyToken(token);
    if (!compararToken._id) return res.send(false);

    const user = await User.findById(compararToken._id);
    res.send({ user });
  } catch (error) {
    handleHttpError(res, "ERROR AL VALIDAR EL TOKEN");
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.send({ message: "Sesión cerrada" });
};
