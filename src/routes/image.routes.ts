import { Router } from "express";
import { uploadImage } from "../controllers/image.conroller";
import multer from "multer";
import os from "os";

const router = Router();

const upload = multer({ dest: os.tmpdir() });

router.post("/", upload.single("image"), uploadImage);

export default router;