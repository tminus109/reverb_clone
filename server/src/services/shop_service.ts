import { getMeAPromise } from "../utils/promiseMe";

export const createNewShopRecord = async (
  userId: number,
  firstName: string
): Promise<number> => {
  const query = `INSERT INTO shops (userId, shopName) VALUES (?, ?);`;
  const shopName = firstName + "'s Gear Shop";
  await getMeAPromise(query, [userId, shopName]);
  return await getMeAPromise(`SELECT LAST_INSERT_ID();`, []);
};
