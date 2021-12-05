import UserStatus from "../enums/UserStatus";
import UserType from "../enums/UserType";

type User = {
  id?: number;
  shopId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType?: UserType;
  userStatus?: UserStatus;
};

export default User;
