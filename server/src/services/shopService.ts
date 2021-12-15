import dbPromise from "../utils/dbPromise";

export const createNewShopRecord = async (
  userId: number,
  firstName: string
) => {
  const newShop = `INSERT INTO shops (userId, shopName) VALUES (?, ?);`;
  const shopName = firstName + "'s Gear Shop";
  const args: Array<number | string> = [userId, shopName];
  await dbPromise(newShop, args);
};
