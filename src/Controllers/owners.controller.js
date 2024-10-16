import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { OwnerModel } from "../models/Owners.model.js";

// const owners = asyncHandler(async (req, res) => {
//   // try {
//   //   // Check if req.body is defined
//   //   if (!req.body) {
//   //     return res
//   //       .status(400)
//   //       .json(new ApiResponse(false, "Request body is missing"));
//   //   }

//   //   const { username, email, password } = req.body;

//   //   // Check for missing fields
//   //   if (!username || !email || !password) {
//   //     return res
//   //       .status(400)
//   //       .json(new ApiResponse(false, "All fields are required"));
//   //   }
//   //   const existedUser = await User.findOne({
//   //     $or: [{ email }],
//   //   });
//   //   if (existedUser) {
//   //     throw new APIError(false, "User already exits with this email");
//   //   }
//   //   // Create a new user in the database
//   //   const newUser = await User.create({
//   //     username, // Include username field here
//   //     email,
//   //     password,
//   //   });
//   //   const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
//   //     newUser._id
//   //   );
//   //   // Send response
//   //   const options = {
//   //     httpOnly: true,
//   //     secure: true,
//   //   };

//   //   return res
//   //     .status(201)
//   //     .cookie("accessToken", accessToken, options)
//   //     .cookie("refreshTokenr", refreshToken)
//   //     .json(new ApiResponse(true, "User registered successfully", newUser));
//   // } catch (error) {
//   //   // Handle errors
//   //   res
//   //     .status(500)
//   //     .json(new ApiResponse(false, "An error occurred", error.message));
//   // }

//   res
//     .send("owners getting Succesfully")
//     .json(new ApiResponse(false, "An error occurred", error.message));
// });

const create = asyncHandler(async (req, res) => {
  let Owners = await OwnerModel.find();

  if (Owners.length > 0) {
    return res
      .status(503)
      .json(
        new ApiResponse(
          false,
          "you don't have permission to create a new owner"
        )
      );
  }
  res.json(new ApiResponse(true, "we can create Owner"));
});

export { create };
