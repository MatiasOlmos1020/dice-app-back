import express from "express";
import { getAllDice, createDice, getDiceById, deleteDiceById } from "../controllers/dice.controller";

const router = express.Router();

router.get("/", getAllDice);
router.post("/", createDice);
router.get("/:id", getDiceById);
router.delete("/:id", deleteDiceById);

export default router;
