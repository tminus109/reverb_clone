import express from "express";
import { addNewUser } from "../controllers/signup_controller";

const signup_router = express.Router();

signup_router.post("signup", addNewUser);

export default signup_router;
