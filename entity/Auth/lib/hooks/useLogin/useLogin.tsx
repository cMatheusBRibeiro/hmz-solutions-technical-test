import { AuthApi } from "@/entity/Auth/model";
import { LoginForm } from "@/entity/Auth/types";
import { useState } from "react";

const useLogin = (authApi: AuthApi) => {
  const [token, setToken] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchLogin = async (loginForm: LoginForm) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);
    setToken(null);

    try {
      const data = await authApi.login(loginForm);
      setToken(data.token);
      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("An unexpected error occurred during login.");
    }

    setIsLoading(false);
  };

  return { dispatchLogin, token, isLoading, isSuccess, error };
};

export default useLogin;
