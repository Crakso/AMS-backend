import mongoose, { Schema } from "mongoose";
const ProductSchema = new Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "UserDB",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "CategoriesDB",
    },
  },
  { timestamps: true }
);

export const ProductDB = mongoose.model("ProductDB", ProductSchema);
