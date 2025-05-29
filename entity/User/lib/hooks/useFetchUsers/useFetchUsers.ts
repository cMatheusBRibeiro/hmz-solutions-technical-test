import { UserApi } from "@/entity/User/model";
import { User } from "@/entity/User/types";
import { useCallback, useState } from "react";

const useFetchUsers = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const dispatchFetchUsers = useCallback(
    async (page = 0, perPage = 10) => {
      setIsLoading(true);

      try {
        const data = await userApi.fetchUsers(page, perPage);
        setUsers(data.data);
        setTotalPages(data.total_pages);
        setTotalElements(data.total);
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
    users,
    totalPages,
    totalElements,
    error,
    dispatchFetchUsers,
  };
};

export default useFetchUsers;
