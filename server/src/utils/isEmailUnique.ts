import { getMeAPromise } from "./promiseMe";

const isEmailUnique = async (email: string): Promise<boolean> => {
  const query = `SELECT COUNT(*) FROM users WHERE email = ?`;
  const result = await getMeAPromise(query, [email]);
  if (result === 0) {
    return true;
  }
  return false;
};

export default isEmailUnique;
