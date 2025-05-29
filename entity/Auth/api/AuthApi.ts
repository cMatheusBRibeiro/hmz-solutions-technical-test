import { Http } from "@/shared";
import { AuthApi as IAuthApi } from "../model";
import { API } from "@/feature";

const AuthApi = (http: Http): IAuthApi => {
  return {
    login(loginForm) {
      return http.post(API.BACKEND.LOGIN.LOGIN, loginForm);
    },
  };
};

export default AuthApi;
