import mongoose, { Schema, Document } from "mongoose";

interface Face {
    faceNumber: number;
    image: string;
}

export interface Dice extends Document {
    name: string;
    faceQty: number;
    faces: Face[];
}

const FaceSchema = new Schema<Face>({
    faceNumber: { type: Number, required: true },
    image: { type: String, required: false },
});

const DiceSchema = new Schema<Dice>({
    name: {type: String, required: true},
    faceQty: { type: Number, required: true },
    faces: { type: [FaceSchema], required: true },
});

export default mongoose.model<Dice>("Dice", DiceSchema);