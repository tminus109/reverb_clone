import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isEmailUnique from "../utils/isEmailUnique";

const validateSignUp = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error("Empty request received");
    } else if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      throw new Error("All input fields are required");
    } else if (!isEmail(req.body.email)) {
      throw new Error("Email is not a valid email");
    } else if (!isEmailUnique(req.body.email)) {
      throw new Error("It seems like you already have an account");
    } else if (req.body.password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    } else {
      next();
    }
  } catch {
    (err: Error) => {
      res.json(err);
    };
  }
};

export default validateSignUp;
