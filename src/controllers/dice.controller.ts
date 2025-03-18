import { Request, Response } from "express";
import { Dice } from "../models/dice.model";

// Base de datos temporal (hasta que usemos una DB real)
let diceCollection: Dice[] = [];

export const getAllDice = (req: Request, res: Response):void => {
  res.json(diceCollection);
};

export const createDice = (req: Request, res: Response):void => {
  const { faceQty, faces } = req.body;

  if (!faceQty || !Array.isArray(faces) || faces.length !== faceQty) {
    res.status(400).json({ message: "Datos inválidos" });
    return;
  }

  const newDice: Dice = { faceQty, faces };
  diceCollection.push(newDice);
  
  res.status(201).json(newDice);
};

export const getDiceById = (req: Request, res: Response):void => {
  const index = parseInt(req.params.id);
  
  if (isNaN(index) || index < 0 || index >= diceCollection.length) {
    res.status(404).json({ message: "Dado no encontrado" });
    return; 
  }

  res.json(diceCollection[index]);
};

