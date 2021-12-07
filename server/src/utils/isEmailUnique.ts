import { getUserIdByEmail } from "../services/user_service";

const isEmailUnique = async (email: string): Promise<boolean> => {
  const userId = await getUserIdByEmail(email);
  if (userId) {
    return true;
  }
  return false;
};

export default isEmailUnique;
