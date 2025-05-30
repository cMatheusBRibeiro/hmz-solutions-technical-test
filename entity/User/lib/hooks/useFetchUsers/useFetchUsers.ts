import { UserApi } from "@/entity/User/model";
import { User } from "@/entity/User/types";
import { useCallback, useEffect, useState } from "react";

const useFetchUsers = (userApi: UserApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const dispatchFetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await userApi.fetchUsers(page + 1, perPage);
      setUsers(data.data);
      setTotalPages(data.total_pages);
      setTotalElements(data.total);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setIsLoading(false);
  }, [userApi, page, perPage]);

  useEffect(() => {
    dispatchFetchUsers();
  }, [page]);

  useEffect(() => {
    if (page == 0) {
      dispatchFetchUsers();
    } else {
      setPage(0);
    }
  }, [perPage]);

  return {
    isLoading,
    users,
    page,
    perPage,
    totalPages,
    totalElements,
    error,
    dispatchFetchUsers,
    setPage,
    setPerPage,
  };
};

export default useFetchUsers;
