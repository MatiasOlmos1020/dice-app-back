import { Request, Response } from "express";
import diceModel from "../models/dice.model";
import { deleteImagesByUrls } from "./image.controller";

export const createDice = async (req: Request, res: Response): Promise<void> => {
  try {
    const dice = await diceModel.create(req.body);
    res.status(201).json(dice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el dado" });
  }
}

export const getAllDice = async (req: Request, res: Response): Promise<void> => {
  try {
    const diceList = await diceModel.find();
    res.status(200).json(diceList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los dados" });
  }
}

export const getDiceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const dice = await diceModel.findById(req.params.id);
    res.status(200).json(dice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el dado" });
  }
}

export const deleteDiceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const dice = await diceModel.findById(req.params.id);

    if (!dice) {
      res.status(404).json({ message: "Dado no encontrado" });
      return;
    }

    // Extraer URLs de imágenes
    const imageUrls = dice.faces
      .map(face => face.image)
      .filter(Boolean); // Elimina null o undefined si hay

    // Eliminar imágenes
    deleteImagesByUrls(imageUrls);

    // Eliminar el dado
    await diceModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Dado e imágenes eliminadas correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el dado" });
  }
};

