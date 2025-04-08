import { Request, Response } from "express";
import diceModel from "../models/dice.model";

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