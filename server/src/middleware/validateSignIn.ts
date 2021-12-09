import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../types/models/User";
import { getUserRecordByEmail } from "../services/user_service";

const validateSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      Object.keys(req.body).length === 0 ||
      !req.body.email ||
      !req.body.password
    ) {
      throw new Error("All input fields are required");
    } else {
      const user: User = await getUserRecordByEmail(req.body.email);
      if (!user || !bcrypt.compare(req.body.password, user.password)) {
        throw new Error("Username or password is incorrect");
      } else if (user.status === "pending") {
        throw new Error(
          "Account is not verified, click on the verification link sent to your email"
        );
      } else {
        req.body.firstName = user.firstName;
        req.body.id = user.id;
        next();
      }
    }
  } catch (error: any) {
    res.json(error.message);
  }
};

export default validateSignIn;
