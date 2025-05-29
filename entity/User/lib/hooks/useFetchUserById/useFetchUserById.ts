import { UserApi } from "@/entity/User/model";
import { User } from "@/entity/User/types";
import { useCallback, useState } from "react";

const useFetchUserById = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const dispatchFetchUserById = useCallback(
    async (id: number) => {
      setIsLoading(true);

      try {
        const data = await userApi.fetchUserById(id);
        setUser(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      setIsLoading(false);
    },
    [userApi]
  );

  return {
    isLoading,
    user,
    error,
    dispatchFetchUserById,
  };
};

export default useFetchUserById;
