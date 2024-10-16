import mongoose, { Schema } from "mongoose";
const productSchema = new Schema(
  {
    image: {
      type: String,
    },

    name: {
      type: String,
    },

    price: {
      type: Number,
    },

    discount: {
      type: Number,
      default: 0,
    },

    bgcolor: {
      type: String,
    },

    panelcolor: {
      type: String,
    },
    textcolor: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("product", productSchema);
