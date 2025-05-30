"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pagination, RowsPerPage } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchUsers, User, UserApi } from "@/entity";
import { BackendHttp } from "@/shared";
import { AxiosAdapter } from "@/shared/lib";
import { Pencil } from "lucide-react";

export interface UsersTableProps {
  onSelectUser?: (user: User) => void;
}

const userApi = UserApi(BackendHttp(AxiosAdapter()));

const UsersTable = ({ onSelectUser = () => {} }: UsersTableProps) => {
  const {
    setPage,
    setPerPage,
    page,
    perPage,
    totalElements,
    totalPages,
    users,
  } = useFetchUsers(userApi);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[45px]"></TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Primeiro nome</TableHead>
            <TableHead>Último nome</TableHead>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="w-[45px]">
                <Pencil
                  className="cursor-pointer"
                  onClick={() => onSelectUser(user)}
                />
              </TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    Avatar do usuário {user.first_name} {user.last_name}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-6 justify-end">
        <RowsPerPage
          value={perPage.toString()}
          onChange={(newValue) => setPerPage(Number(newValue))}
        />
        <Pagination
          page={page}
          perPage={perPage}
          totalElements={totalElements}
          totalPages={totalPages}
          onNextPage={() => setPage((prev) => prev + 1)}
          onPreviousPage={() => setPage((prev) => prev - 1)}
        />
      </div>
    </>
  );
};

export default UsersTable;
