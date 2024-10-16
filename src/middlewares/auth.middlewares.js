import { UserModel } from "../models/User.model.js";
import { APIError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const varifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new APIError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await UserModel.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new APIError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new APIError(401, "Invalid access Token");
  }
});
