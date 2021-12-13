import { getUserIdByEmail } from "../services/userService";

const isEmailUnique = async (email: string): Promise<boolean> => {
  const userId = await getUserIdByEmail(email);
  if (userId === 0) {
    return true;
  }
  return false;
};

export default isEmailUnique;
