import { NextFunction, Request, Response } from "express";

const validateSignIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (
      Object.keys(req.body).length === 0 ||
      !req.body.email ||
      !req.body.password
    ) {
      throw new Error("All input fields are required");
    }
  } catch {
    (err: Error) => {
      res.status(400).json(err);
    };
  }
};

export default validateSignIn;

// user exists?
// password correct?
// user status active?
