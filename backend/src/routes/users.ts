import { Router, Request, Response } from "express";
import User from "../models/user";
import { hassedPassword ,comparedpass} from "../utility/passwordEncoderHelper";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import path from "path";
import { check, query ,validationResult} from'express-validator' ;


const userRouter = Router();
const envFilePath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envFilePath });


export default userRouter;
