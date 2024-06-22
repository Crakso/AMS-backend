import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoute from "./routes/user.js";

const Server = express();
dotenv.config();

main().catch((err) => {
  console.log(err);
});
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("Connected Successfully with DB");
  } catch (error) {
    console.log(error);
  }

  Server.use("/api/v1/user", userRoute);

  Server.listen(3000, () => {
    console.log("The Server is now active on port:3000");
  });
}
