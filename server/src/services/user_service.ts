import User from "../types/models/User";
import { crypt } from "../utils/blowfishCrypt";
import { getMeAPromise } from "../utils/promiseMe";

export const getUserRecordByEmail = async (email: string): Promise<User> => {
  const query = `SELECT email FROM users WHERE email = ? LIMIT 1;`;
  const user = await getMeAPromise(query, [email]);
  return user;
};

export const createNewUserRecord = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<number> => {
  const hashedPassword = crypt(password);
  const insertQuery = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);`;
  await getMeAPromise(insertQuery, [
    firstName,
    lastName,
    email,
    hashedPassword,
  ]);
  return await getMeAPromise(`SELECT LAST_INSERT_ID();`, []);
};

export const updateUserRecordWithShopId = async (
  shopId: number,
  id: number
) => {
  const query = `UPDATE users SET shopId  = ? WHERE id = ?;`;
  await getMeAPromise(query, [shopId, id]);
};
