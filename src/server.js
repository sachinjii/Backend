import ConnectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "/.env",
});

const Port = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server Is Running at Port : ${Port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connenction Failed !!!", error);
  });
