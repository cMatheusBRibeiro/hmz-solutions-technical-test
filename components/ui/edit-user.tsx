import { User, UserApi, useUpdateUser } from "@/entity";
import { Label } from "./label";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Button } from "./button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { BackendHttp } from "@/shared";
import { AxiosAdapter } from "@/shared/lib";
import Swal from "sweetalert2";

export interface EditUserProps {
  user: User | null;
  onClose: () => void;
}

const userApi = UserApi(BackendHttp(AxiosAdapter()));

const EditUserDialog = ({ user, onClose }: EditUserProps) => {
  const { dispatchUpdateUser, isLoading, isUpdated, error } =
    useUpdateUser(userApi);

  const isSelectedUser = useMemo(() => !!user, [user]);

  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const saveUser = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!editedUser) return;

      dispatchUpdateUser(editedUser.id, {
        first_name: editedUser.first_name,
        last_name: editedUser.last_name,
        email: editedUser.email,
      });
    },
    [editedUser, dispatchUpdateUser]
  );

  useEffect(() => {
    if (isLoading) {
      Swal.fire({
        title: "Aguarde um moment",
        text: "Estamos enviando as novas informações do usuário",
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }

    if (isUpdated) {
      Swal.fire({
        title: "Sucesso",
        text: "Usuário atualizado com sucesso",
        icon: "success",
      });
      onClose();
    }

    if (error) {
      Swal.fire({
        title: "Erro",
        text: error,
        icon: "error",
      });
    }
  }, [isLoading, isUpdated, error]);

  return (
    <Dialog open={isSelectedUser} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar usuário</DialogTitle>
        </DialogHeader>
        <form onSubmit={saveUser}>
          <div className="grid grid-rows-2 gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label>Primeiro nome</Label>
                <Input
                  value={editedUser?.first_name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    editedUser &&
                    setEditedUser({
                      ...editedUser,
                      first_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label>Último nome</Label>
                <Input
                  value={editedUser?.last_name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    editedUser &&
                    setEditedUser({
                      ...editedUser,
                      last_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>E-mail</Label>
              <Input
                value={editedUser?.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  editedUser &&
                  setEditedUser({
                    ...editedUser,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between w-full">
            <Button className="cursor-pointer" variant="destructive">
              EXCLUIR
            </Button>
            <div className="flex gap-2">
              <DialogClose asChild>
                <Button className="cursor-pointer" variant="outline">
                  CANCELAR
                </Button>
              </DialogClose>
              <Button
                className="cursor-pointer"
                type="submit"
                variant="default"
              >
                SALVAR
              </Button>
            </div>
          </div>{" "}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
