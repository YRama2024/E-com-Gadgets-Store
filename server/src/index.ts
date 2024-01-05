import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://jackcruiser800:mynameisrama@cluster0.gcwldi3.mongodb.net/"
);

app.listen(3001, () => console.log("Server started"));
