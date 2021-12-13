import { Request, Response } from "express";
import { createNewShopRecord } from "../services/shopService";
import { createNewUserRecord, getUserIdByEmail } from "../services/userService";

const addNewUser = (req: Request, res: Response) => {
  createNewUserRecord(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  )
    .then(() => {
      return getUserIdByEmail(req.body.email);
    })
    .then(async (result) => {
      await createNewShopRecord(result, req.body.firstName);
      res.status(201).json({
        message:
          "Sign up was successful, confirm your account by clicking on the link sent to your email before sign in",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export default addNewUser;
