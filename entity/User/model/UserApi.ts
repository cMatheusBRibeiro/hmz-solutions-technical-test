import { Page } from "@/shared";
import { EditUser, User } from "..";

export interface UserApi {
  fetchUsers: (page?: number, perPage?: number) => Promise<Page<User>>;
  fetchUserById: (id: number) => Promise<User>;
  updateUser: (id: number, editedUser: EditUser) => Promise<User>;
  deleteUser: (id: number) => Promise<void>;
}
