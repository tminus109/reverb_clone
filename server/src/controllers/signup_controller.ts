import { Request, Response } from "express";
import { createNewShopRecord } from "../services/shop_service";
import {
  createNewUserRecord,
  getUserIdByEmail,
} from "../services/user_service";

const addNewUser = async (req: Request, res: Response) => {
  try {
    await createNewUserRecord(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );
    const userId = await getUserIdByEmail(req.body.email);
    await createNewShopRecord(userId, req.body.firstName);
    res.status(201).json({
      message:
        "Sign up was successful, confirm your account by clicking on the link sent to your email before sign in",
    });
  } catch (err) {
    res.json(err);
  }
};

export default addNewUser;
