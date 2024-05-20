import express,{Request,  Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from "path";
import userRouter  from "./routes/users";
import authRouter from "./routes/auth";

const envFilePath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envFilePath });


mongoose.connect(process.env.MONGODB_CONNECTION_KEY as string)

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/booking-app/user",userRouter)
app.use("/booking-app/auth",authRouter)

app.listen(7000, ()=>{
    console.log("server is running on 7000");
}) 