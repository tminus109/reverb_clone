import { crypt } from "../utils/blowfishCrypt";
import { getMeAPromise } from "../utils/promiseMe";

export const createNewUserRecord = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const newUser = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);`;
  await getMeAPromise(newUser, [firstName, lastName, email, crypt(password)]);
};

export const getUserIdByEmail = async (email: string): Promise<number> => {
  const userId = `SELECT id FROM users WHERE email = ?;`;
  return await getMeAPromise(userId, [email]);
};
