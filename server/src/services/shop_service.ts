import { getMeAPromise } from "../utils/promiseMe";

export const createNewShopRecord = async (
  userId: number,
  firstName: string
) => {
  const newShop = `INSERT INTO shops (userId, shopName) VALUES (?, ?);`;
  const shopName = firstName + "'s Gear Shop";
  await getMeAPromise(newShop, [userId, shopName]);
};
