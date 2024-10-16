import { Router } from "express";
const router = Router();
import { upload } from "../middlewares/multer.middlewares.js";
import { varifyJWT } from "../middlewares/auth.middlewares.js";
import { registerUser } from "../Controllers/user.controller.js";
import { products } from "../Controllers/products.controller.js";

router.route("/productList").get(products);

export default router;
