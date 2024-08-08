import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signToken = (user) => {
  const sing = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return sing;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
