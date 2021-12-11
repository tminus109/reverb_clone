import User from "../types/models/User";
import { crypt } from "../utils/blowfishCrypt";
import promiseMe from "../utils/promiseMe";

export const createNewUserRecord = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const newUser = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);`;
  const args: Array<string> = [firstName, lastName, email, crypt(password)];
  await promiseMe(newUser, args);
};

export const getUserIdByEmail = async (email: string): Promise<number> => {
  const userId = `SELECT id FROM users WHERE email = ?;`;
  const args: Array<string> = [email];
  const result: Array<{ id: number }> = await promiseMe(userId, args);
  if (result.length > 0) {
    return result[0].id;
  } else {
    return 0;
  }
};

export const getUserRecordByEmail = async (email: string): Promise<User> => {
  const user = `SELECT * FROM users where email = ?`;
  const args: Array<string> = [email];
  return await promiseMe(user, args);
  ///
  // to be revised return statement!!!
  ///
};
