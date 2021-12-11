import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { getUserRecordByEmail } from "../services/user_service";

const validateSignIn = (req: Request, res: Response, next: NextFunction) => {
  if (
    Object.keys(req.body).length === 0 ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).json({ message: "All input fields are required" });
  } else {
    getUserRecordByEmail(req.body.email)
      .then((result) => {
        if (
          result === null ||
          !bcrypt.compare(req.body.password, result.password)
        ) {
          res
            .status(400)
            .json({ message: "Username or password is incorrect" });
        } else if (result.status === "pending") {
          res.status(400).json({
            message:
              "Account is not verified, click on the verification link sent to your email",
          });
        } else {
          req.body.firstName = result.firstName;
          req.body.id = result.id;
          next();
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      });
  }
};

export default validateSignIn;
