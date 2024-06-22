import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const CategoriesDB = mongoose.model("CategoriesDB", CategorySchema);
