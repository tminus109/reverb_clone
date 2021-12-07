import express from "express";
import signInUser from "../controllers/signin_controller";

const signin_router = express.Router();

signin_router.post("signin", signInUser);

export default signin_router;
