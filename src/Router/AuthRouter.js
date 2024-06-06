import express from "express"
import { handleLogin, handleRegister } from "../Controller/AuthController.js";
export const AuthRoute = express.Router()


AuthRoute.post("/login",handleLogin);
AuthRoute.post("/register",handleRegister);

