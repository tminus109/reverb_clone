import { Request, Response } from "express";
import generateToken from "../utils/generateToken";

const signInUser = (req: Request, res: Response) => {
  try {
    const token = generateToken(req.body.id, req.body.firstName);
    res.status(200).json(token);
  } catch (err) {
    res.json(err);
  }
};

export default signInUser;
