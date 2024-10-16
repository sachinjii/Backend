import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GenerateToken } from "../utils/GenerateToken.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.model.js";
const registerUser = asyncHandler(async (req, res) => {
  try {
    let { email, password, fullname } = req.body;
    if (!req.body) {
      return res
        .status(400)
        .json(new ApiResponse(false, "Request body is missing"));
    }

    // Check for missing fields
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json(new ApiResponse(false, "All fields are required"));
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          // Handle error
          return;
        }

        let user = await UserModel.create({
          email,
          fullname,
          password: hash,
        });

        let token = GenerateToken(user);

        res
          .status("201")
          .cookie("token", token)
          .json(new ApiResponse(true, "Register Succesfully", { user }));
        console.log("token:", token);
      });
    });

    // await user.save();
  } catch (error) {
    res
      .status("401")
      .json(new ApiResponse(false, "Request Failed", error.message));
  }
});

export { registerUser };
