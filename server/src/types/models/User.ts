import Status from "../enums/Status";
import Role from "../enums/Role";

type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role?: Role;
  status?: Status;
};

export default User;
