import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";
import productsRouter from "./routes/products.routes.js";
import ownersRouter from "./routes/owners.routes.js";

//routes declaration
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/owners", ownersRouter);

export { app };
