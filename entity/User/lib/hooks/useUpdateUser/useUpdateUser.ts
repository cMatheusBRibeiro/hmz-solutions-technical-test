import { UserApi } from "@/entity/User/model";
import { useCallback, useState } from "react";

const useUpdateUser = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchUpdateUser = useCallback(
    async (id: number) => {
      setIsLoading(true);
      setIsUpdated(false);

      try {
        await userApi.updateUser(id);
        setIsUpdated(true);
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
    isUpdated,
    error,
    dispatchUpdateUser,
  };
};

export default useUpdateUser;
