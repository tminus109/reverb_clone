import { Request, Response } from "express";
import { createNewShopRecord } from "../services/shop_service";
import {
  createNewUserRecord,
  updateUserRecordWithShopId,
} from "../services/user_service";

export const addNewUser = async (req: Request, res: Response) => {
  const userId = await createNewUserRecord(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  );
  const shopId = await createNewShopRecord(userId, req.body.firstName);
  await updateUserRecordWithShopId(shopId, userId);
};
