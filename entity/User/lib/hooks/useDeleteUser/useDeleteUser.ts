import { UserApi } from "@/entity/User/model";
import { useCallback, useState } from "react";

const useDeleteUser = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchDeleteUser = useCallback(
    async (id: number) => {
      setIsLoading(true);
      setIsDeleted(false);

      try {
        await userApi.deleteUser(id);
        setIsDeleted(true);
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
    isDeleted,
    error,
    dispatchDeleteUser,
  };
};

export default useDeleteUser;
