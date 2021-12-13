import express from "express";
import addNewUser from "../controllers/signupController";

const signupRouter = express.Router();

signupRouter.post("/", addNewUser);

export default signupRouter;
