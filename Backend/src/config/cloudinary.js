import { v2 as cloudinary } from "cloudinary";
import config from "./config.js";

cloudinary.config({
  cloud_name: config.CLOUDINARYNAME,
  api_key: config.CLOUDINARYKEY,
  api_secret: config.CLOUDINARYSECRET,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "inmobiliaria",
    transformation: [
      { width: 600, height: 600, crop: "limit" }, 
      { quality: 80 }, 
      { fetch_format: "webp" } 
    ]
  });
};

export const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id);
};