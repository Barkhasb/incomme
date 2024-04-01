import express from "express";
import {
  getAllUsers,
  getUserByEmailService,
  deleteUserByEmailService,
  createNewUserService,
  updateUserByEmailService,
} from "../controllers/usersController.js";
import { isAuthenticated } from "../middleware/checkPassword.js";
import { logInUserService } from "../controllers/usersController.js";
import { tokenCheck } from "../middleware/refreshToken.js";

const userRouter = express.Router();

userRouter.get("/", tokenCheck, getAllUsers);
userRouter.get("/users/:email", getUserByEmailService);
userRouter.delete("/users/:email", deleteUserByEmailService);
userRouter.post("/login", logInUserService);
userRouter.post("/users", createNewUserService);
userRouter.put("/users/:email", updateUserByEmailService);

export default userRouter;
