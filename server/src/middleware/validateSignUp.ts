import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isEmailUnique from "../utils/isEmailUnique";

const validateSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Empty request received" });
  } else if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).json({ message: "All input fields are required" });
  } else if (!isEmail(req.body.email)) {
    res.status(400).json({ message: "Email is not a valid email" });
  } else if (req.body.password.length < 8) {
    res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  } else {
    try {
      const uniqueEmail: boolean = await isEmailUnique(req.body.email);
      if (uniqueEmail) {
        next();
      } else {
        res
          .status(400)
          .json({ message: "It seems like you already have an account" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default validateSignUp;
