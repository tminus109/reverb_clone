import { Request, Response } from "express";
import { createNewUserRecord } from "../services/user_service";

export const addNewUser = async (req: Request, res: Response) => {
  const userId = await createNewUserRecord(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  );
};
