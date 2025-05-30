import { Button } from "@/components/ui/button";
import UsersTable from "@/components/ui/users";

const UsersPage = () => {
  return (
    <div className="flex flex-col gap-6 p-4 bg-gray-50 h-full">
      <div className="flex justify-between">
        <h2 className="text-xl">Usuários</h2>
        <Button variant="outline" className="px-6">
          NOVO
        </Button>
      </div>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
