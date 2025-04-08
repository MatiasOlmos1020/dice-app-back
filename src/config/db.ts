import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Conectado a MongoDB");
    } catch (err) {
        console.error("Error al conectar a MongoDB:", err);
        process.exit(1);
    }
}