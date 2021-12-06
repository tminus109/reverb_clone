import User from "../types/models/User";
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

  const getUserId = `SELECT id FROM users WHERE email = ?;`;
  const userId = await getMeAPromise(getUserId, [email]);

  const newShop = `INSERT INTO shops (userId, shopName) VALUES (?, ?);`;
  const shopName = firstName + "'s Gear Shop";
  await getMeAPromise(newShop, [userId, shopName]);
};

export const getUserRecordByEmail = async (email: string): Promise<User> => {
  const query = `SELECT email FROM users WHERE email = ?;`;
  return await getMeAPromise(query, [email]);
};
