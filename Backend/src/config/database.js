import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.DATABASE);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
export default connectDB