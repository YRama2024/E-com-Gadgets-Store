import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST","GET"],
    credentials:true
  }
));

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://jackcruiser800:mynameisrama@cluster0.gcwldi3.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/",(req,res)=>{
  res.json("hello");
});

app.listen(3001, () => console.log("Server started"));
