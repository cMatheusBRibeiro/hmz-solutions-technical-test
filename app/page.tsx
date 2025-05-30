"use client";

import { Button } from "@/components/ui/button";
import EditUserDialog from "@/components/ui/edit-user";
import UsersTable from "@/components/ui/users";
import { User } from "@/entity";
import { useState } from "react";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="flex flex-col gap-6 p-4 bg-gray-50 h-full">
      <div className="flex justify-between">
        <h2 className="text-xl">Usuários</h2>
        <Button variant="outline" className="px-6">
          NOVO
        </Button>
      </div>
      <UsersTable onSelectUser={setSelectedUser} />
      <EditUserDialog
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default UsersPage;
