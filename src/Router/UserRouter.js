import express from "express"
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../Controller/UserController.js";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";
export const userRoute = express.Router()


userRoute.get("/user",getAllUser);
userRoute.get("/user/:id/", authMiddleware(["user","admin"]),getUserById);
userRoute.post("/user",authMiddleware(["user","admin"]),createUser);
userRoute.put("/user/:id",authMiddleware(["admin"]),updateUserById);
userRoute.delete("/user/:id",authMiddleware(["admin"]),deleteUserById);
