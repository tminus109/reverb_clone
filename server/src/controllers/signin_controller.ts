import { Request, Response } from "express";
import generateToken from "../utils/generateToken";

const signInUser = (req: Request, res: Response) => {
  try {
    const token = generateToken(req.body.id, req.body.firstName);
    res.status(200).json(token);
  } catch (error: any) {
    res.json(error.message);
  }
};

export default signInUser;
