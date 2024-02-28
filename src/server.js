import ConnectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "/.env",
});

const Port = process.env.PORT || 8000;

ConnectDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server Is Running at Port : ${Port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connenction Failed !!!", error);
  });
