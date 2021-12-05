import { getMeAPromise } from "./promiseMe";

const isEmailUnique = async (email: string): Promise<boolean> => {
  const query = `SELECT email FROM users WHERE email = ? LIMIT 1`;
  const result = await getMeAPromise(query, [email]);
  if (result) {
    return true;
  }
  return false;
};

export default isEmailUnique;
