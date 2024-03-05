import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const index = async () => {
  try {
    // const connectionIstance = await mongoose.connect(
    //   "mongodb+srv://SachinYadav:sachin1234@cluster0.pq3qgrh.mongodb.net"
    // );

    const connectionIstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `\n MongoDB conneced !! DB Host : ${connectionIstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connenction FAILED error is", error);
    // process.exit(1);
  }
};

export default index;
