import express from "express";
import { authMiddleware } from '../middlewares/auth.middleware';
import { getAllDice, createDice, getDiceById, deleteDiceById } from "../controllers/dice.controller";

const router = express.Router();

router.get("/", authMiddleware , getAllDice);
router.post("/",authMiddleware, createDice);
router.get("/:id", getDiceById);
router.delete("/:id", deleteDiceById);

export default router;
