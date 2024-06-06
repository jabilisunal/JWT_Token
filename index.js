import express from "express";
const app = express();
const port = 5500;
import mongoose from "mongoose";
import { userRoute } from "./src/Router/UserRouter.js";
import { AuthRoute } from "./src/Router/AuthRouter.js";
app.use(express.json())


app.use("/",userRoute);
app.use("/",AuthRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose
  .connect("mongodb+srv://Sunal:12345BackenD@mycluster.4byfppp.mongodb.net/")
  .then(() => console.log("Connected!"));
