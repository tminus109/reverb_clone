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
    res.status(201).json({
      message:
        "Sign up was successful, confirm your account by clicking on the link sent to your email before sign in",
    });
  } catch {
    (err: Error) => {
      res.json(err);
    };
  }
};
