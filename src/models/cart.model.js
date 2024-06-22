import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "ProductDB",
  },
  quantity: {
    type: Number,
  },
});

export const CartDB = mongoose.model("CartDB", CartSchema);
