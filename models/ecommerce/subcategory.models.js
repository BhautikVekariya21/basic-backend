import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
});

export const Subcategory = mongoose.model("Subcategory", subcategorySchema);
