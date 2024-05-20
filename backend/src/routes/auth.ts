import { Router, Request, Response } from "express";
import User from "../models/user";
import { hassedPassword ,comparedpass} from "../utility/passwordEncoderHelper";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import path from "path";
import { check, query ,validationResult} from'express-validator' ;


const authRouter = Router();
const envFilePath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envFilePath });

authRouter.post("/signup", [
    check("email","Email is required").isEmail().notEmpty(),  
    check("password","password is required, Min 6 characters required ").isString().isLength({min:6}),
    check("firstName","firstName is required").isString().notEmpty(),
    check("lastName","lastName is required").isString().notEmpty(),
    ],async (req: Request, res: Response) => {
    try {
        const payloadError=validationResult(req);
        if(!payloadError.isEmpty()){
            return res.status(400).json({ message: "Incorrect payload ",error:payloadError.array()});
 
        }
        let user = await User.findOne({
            email: req.body.email,
        });
        if (user) {
            return res.status(409).json({
                message: `User already exists with this email ${req.body.email}`,
            });
        }
        req.body.password = hassedPassword(req.body.password);
        let newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json({ message: "User created Successfully" });
    } catch (error) {
        console.error("Error while signing up:", error);
        res.status(500).json({ message: "An error occurred while signing up" });
    }
});
authRouter.post("/signin",[
    check("email","Email is required").isEmail().notEmpty(),  
    check("password","password is required, Min 6 characters required ").isString().isLength({min:6})
    ], async (req: Request, res: Response) => {
    try {
        const payloadError=validationResult(req);
        if(!payloadError.isEmpty()){
            return res.status(400).json({ message: "Incorrect payload "+payloadError.array()});
 
        }

        let user = await User.findOne({
            email: req.body.email,
        });
        if (user) {
            if(comparedpass( req.body.password,user.password)){
                const token=jwt.sign({userID:user?._id},process.env.JWY_SECRET_KEY as string,
                    {
                        expiresIn:"1d",
                    }
                )
                return res.status(200).json({ message: "login success " ,auth_token:token});

            } else {
                return res
                    .status(401)
                    .json({ message: "wrong password unauthorized " });
            }
        } else {
            return res.status(404).json({ message: "User not found " });
        }
    } catch (error) {
        console.error("Error while signinig in", error);
        return res
            .status(500)
            .json({ message: "An error occurred while signing in" });
    }
});
export default authRouter;
