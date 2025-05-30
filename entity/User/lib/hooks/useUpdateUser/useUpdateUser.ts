import { UserApi } from "@/entity/User/model";
import { EditUser } from "@/entity/User/types";
import { useCallback, useState } from "react";

const useUpdateUser = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchUpdateUser = useCallback(
    async (id: number, editedUser: EditUser) => {
      setIsLoading(true);
      setIsUpdated(false);
      setError(null);

      try {
        await userApi.updateUser(id, editedUser);
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
