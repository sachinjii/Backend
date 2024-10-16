import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      // required: [true, "UserName is required"],
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    cart: {
      type: Array,
      default: [],
    },

    isadmin: {
      type: Boolean,
    },

    orders: {
      type: Array,
      default: [],
    },
    contact: {
      type: Number,
    },

    picture: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
export const UserModel = mongoose.model("user", userSchema);
