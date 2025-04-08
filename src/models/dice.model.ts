import mongoose, { Schema, Document } from "mongoose";

interface Face {
    faceNumber: number;
    image: string;
}

export interface Dice extends Document {
    faceQty: number;
    faces: Face[];
}

const FaceSchema = new Schema<Face>({
    faceNumber: { type: Number, required: true },
    image: { type: String, required: true },
});

const DiceSchema = new Schema<Dice>({
    faceQty: { type: Number, required: true },
    faces: { type: [FaceSchema], required: true },
});

export default mongoose.model<Dice>("Dice", DiceSchema);