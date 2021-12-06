import UserStatus from "../enums/UserStatus";
import UserType from "../enums/UserType";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: UserType;
  status: UserStatus;
};

export default User;
