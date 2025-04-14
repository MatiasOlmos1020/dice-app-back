import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
import { AuthRequest } from '../middlewares/auth.middleware';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: AuthRequest, file) => {
    const { userId } = req as AuthRequest; // 👈 ahora ya lo tiene

    const diceName = req.body.diceName || 'unnamed-dice';
    const faceNumber = req.body.faceNumber || '0';
    const timestamp = Date.now();

    return {
      folder: `${userId || 'anonymous'}/${diceName}`,
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
      public_id: `${faceNumber}_${timestamp}`
    };
  }
});

export { cloudinary, storage };
