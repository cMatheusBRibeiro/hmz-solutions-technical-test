import { Http } from "@/shared/model/Http";
import { UserApi as IUserApi } from "../model";
import { API } from "@/feature";

const UserApi = (http: Http): IUserApi => {
  return {
    deleteUser(id) {
      return http.delete(
        API.BACKEND.USERS.DELETE_USER.replace("{id}", id.toString())
      );
    },
    fetchUserById(id) {
      return http.get(
        API.BACKEND.USERS.FETCH_USER_BY_ID.replace("{id}", id.toString())
      );
    },
    fetchUsers(page = 0, perPage = 10) {
      return http.get(API.BACKEND.USERS.FETCH_USERS, {
        page: page.toString(),
        per_page: perPage.toString(),
      });
    },
    updateUser(id, editedUser) {
      return http.put(
        API.BACKEND.USERS.UPDATE_USER.replace("{id}", id.toString()),
        editedUser
      );
    },
  };
};

export default UserApi;
