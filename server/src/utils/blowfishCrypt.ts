import bcrypt from "bcrypt";

const salt = 7;

export const crypt = (plainText: string) => {
  return bcrypt.hashSync(plainText, salt);
};
