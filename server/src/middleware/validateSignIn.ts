import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../types/models/User";
import { getMeAPromise } from "../utils/promiseMe";

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
      const query = `SELECT * FROM users where email = ?`;
      const user: User = await getMeAPromise(query, [req.body.email]);
      if (!user || !bcrypt.compare(req.body.password, user.password)) {
        throw new Error("Username or password is incorrect");
      } else if (user.status === "Pending") {
        throw new Error(
          "Account is not verified, click on the verification link sent to your email"
        );
      } else {
        req.body.firstName = user.firstName;
        req.body.id = user.id;
        next();
      }
    }
  } catch {
    (err: Error) => {
      res.json(err);
    };
  }
};

export default validateSignIn;
