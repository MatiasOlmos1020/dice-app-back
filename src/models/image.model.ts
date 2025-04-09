import mongoose, { Schema, Document } from "mongoose";

export interface Image extends Document {
    filename: string;
    url: string;
    uploadedAt: Date;
}

const ImageSchema = new Schema<Image>({
    filename: { type: String, required: true },
    url: { type: String, required: true },
    uploadedAt: { type: Date,  default: Date.now },
});

export default mongoose.model<Image>("Image", ImageSchema);