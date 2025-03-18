import express from "express";
import { getAllDice, createDice, getDiceById } from "../controllers/dice.controller";

const router = express.Router();

router.get("/", getAllDice);
router.post("/", createDice);
router.get("/:id", getDiceById);

export default router;
