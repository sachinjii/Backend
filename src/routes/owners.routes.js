import { Router } from "express";
const router = Router();
import { upload } from "../middlewares/multer.middlewares.js";
import { varifyJWT } from "../middlewares/auth.middlewares.js";
import { registerUser } from "../Controllers/user.controller.js";
import { products } from "../Controllers/products.controller.js";
import { create } from "../Controllers/owners.controller.js";
import dotenv from "dotenv";
dotenv.config();

if (process.env === "development") {
  router.route("/owner").post(create);
}

export default router;
