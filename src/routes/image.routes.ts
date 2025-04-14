import { Router } from "express";
import { uploadImage } from "../controllers/image.controller";
import multer from "multer";
import { storage } from "../config/cloudinary";
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("image") , uploadImage);

export default router;
