import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";

export const uploadImage = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      throw new Error("No se recibió ningún archivo");
    }

    const imageUrl = (req.file as any).path; // multer-storage-cloudinary le agrega esta propiedad
    const faceNumber = parseInt(req.body.faceNumber);

    res.status(201).json({ imageUrl, faceNumber });
  } catch (error) {
    console.error("Error al subir imagen:", error);
    res.status(500).json({ message: "Error al subir la imagen" });
  }
};