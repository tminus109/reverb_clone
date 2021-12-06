import express from "express";
import issueToken from "../services/login_service";

const signin_router = express.Router();

signin_router.post("signin", issueToken);

export default signin_router;
