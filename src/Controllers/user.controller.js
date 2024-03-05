import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError, ApiError } from "../utils/ApiError.js";
import { User, user } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user Details from Frontend
  // validation - not empty
  // check if user already exists : username , email
  // check for images, check for avatar
  // upload them to cloudinary , avatar
  // create user object - create entry in db
  // remove password and refresh token feild from response
  // check for user creation
  // return res
  const { fullName, email, username, password } = req.body;

  /////////////// one Option /////////////////

  // if (fullName === "") {
  //   throw new ApiError(400, "fullname is required");
  // }

  if (
    [fullName, email, username, password].some((feild) => feild?.trim() === "")
  ) {
    throw new ApiError(400, "All feilds are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exits");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refrsehToken"
  );

  if (!createdUser) {
    throw new APIError(500, "Something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(ApiResponse(200, createdUser, "User registered Successfully"));
});

export { registerUser };
