import { Router } from "express";
import { registerUser } from "../Controllers/user.controller.js";
const router = Router();
import { upload } from "../middlewares/multer.middlewares.js";

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
// router.route("/login").post(login);

export default router;
