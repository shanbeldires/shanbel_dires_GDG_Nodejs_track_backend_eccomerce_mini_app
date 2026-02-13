import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: Number
      }
    ],
    totalAmount: Number,
    customerName: String,
    customerAddress: String,
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
