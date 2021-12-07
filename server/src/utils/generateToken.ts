import jwt from "jsonwebtoken";
import Token from "../types/models/Token";

const generateToken = (id: number, firstName: string) => {
  const payload: Token = {
    id: id,
    firstName: firstName,
  };

  if (process.env.TOKEN_SECRET) {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "12s" });
  } else {
    throw new Error("Token secret is undefined");
  }
};

export default generateToken;

// expiresIn: '24h'
