import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    CLOUDINARYNAME: process.env.CLOUDINARY_NAME,
    CLOUDINARYKEY: process.env.CLOUDINARY_KEY,
    CLOUDINARYSECRET: process.env.CLOUDINARY_SECRET,
    FRONTEND : process.env.FRONTEND_URL,
}

export default config