import { LoginForm, LoginFormResponse } from "../types";

export interface AuthApi {
  login: (loginForm: LoginForm) => Promise<LoginFormResponse>;
}
