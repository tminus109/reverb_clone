import { getUserRecordByEmail } from "../services/user_service";

const isEmailUnique = async (email: string): Promise<boolean> => {
  const user = await getUserRecordByEmail(email);
  if (user) {
    return true;
  }
  return false;
};

export default isEmailUnique;
