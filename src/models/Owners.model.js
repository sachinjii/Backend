import mongoose, { Schema } from "mongoose";
const ownerSchema = new Schema(
  {
    fullname: {
      type: String,
      minLength: 3,
      trim: true,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    products: {
      type: Array,
      default: [],
    },

    picture: {
      type: String,
    },
    gstin: String,
  },
  { timestamps: true }
);
export const OwnerModel = mongoose.model("owner", ownerSchema);
