import mongoose, { Schema, mongo } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "UserDB",
    },
    orderItems: {
      type: mongoose.Types.ObjectId,
      ref: "CartDB",
    },
    address: {
      type: String,
    },
    status: {
      type: Enumerator,
    },
    paymentId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderDB = mongoose.model("OrderDB", OrderSchema);
