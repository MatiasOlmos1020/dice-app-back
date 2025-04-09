import fs from 'fs';
import path from 'path';
import { Request, Response } from "express";
import imageModel from "../models/image.model";

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

    const image = new imageModel({
      filename: fileName,
      url: imageUrl,
    });

    await image.save();

    res.status(201).json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error al subir la imagen" });
  }
};
