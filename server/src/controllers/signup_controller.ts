import { Request, Response } from "express";
import { createNewUserRecord } from "../services/user_service";

export const addNewUser = async (req: Request, res: Response) => {
  try {
    await createNewUserRecord(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );
    res.json({ message: "Sign up was successful, you may sign in now" });
  } catch {
    (err: Error) => {
      res.json(err);
    };
  }
};
