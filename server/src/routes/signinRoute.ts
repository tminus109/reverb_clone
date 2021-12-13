import express from "express";
import signInUser from "../controllers/signinController";

const signinRouter = express.Router();

signinRouter.post("/", signInUser);

export default signinRouter;
