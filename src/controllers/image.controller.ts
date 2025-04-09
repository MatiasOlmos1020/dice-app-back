import fs from 'fs';
import path from 'path';
import { Request, Response } from "express";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      throw new Error("No se recibió ningún archivo");
    }

    const tempPath = req.file.path;
    const ext = path.extname(req.file.originalname);
    const fileName = `${req.file.filename}-${Date.now()}${ext}`;
    const publicPath = path.join(__dirname, '..', '..', 'public', 'images', fileName);

    fs.copyFileSync(tempPath, publicPath);
    fs.unlinkSync(tempPath);

    const imageUrl = `/images/${fileName}`;

    res.status(201).json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error al subir la imagen" });
  }
};

export const deleteImagesByUrls = (urls: string[]): void => {
  urls.forEach((url) => {
    const imagePath = path.join(__dirname, '..', '..', 'public', url);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.warn(`No se pudo eliminar la imagen: ${imagePath}`);
      }
    });
  });
};