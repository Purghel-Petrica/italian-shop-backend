import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String },
  },
  
);

export default mongoose.model("Product", productSchema);
