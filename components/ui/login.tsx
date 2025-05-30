import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AuthApi, LoginForm, useLogin } from "@/entity";
import { BackendHttp } from "@/shared";
import { AxiosAdapter } from "@/shared/lib";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

export interface LoginPageProps {
  onGenerateToken: () => void;
}

const authApi = AuthApi(BackendHttp(AxiosAdapter()));

const LoginPage = ({ onGenerateToken = () => {} }: LoginPageProps) => {
  const { dispatchLogin, isLoading, isSuccess, error, token } =
    useLogin(authApi);

  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const sendLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatchLogin(loginForm);
  };

  useEffect(() => {
    if (isLoading) {
      Swal.fire({
        title: "Aguarde",
        text: "Estamos processando seu login...",
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }

    if (isSuccess) {
      localStorage.setItem("teste-tecnico-token", token || "");
      Swal.fire({
        title: "Sucesso",
        text: "Login realizado com sucesso!",
        icon: "success",
      });
      onGenerateToken();
    }

    if (error) {
      Swal.fire({
        title: "Erro",
        text: error,
        icon: "error",
      });
    }
  }, [isLoading]);

  return (
    <main className="flex w-dvw h-dvh">
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <h1 className="text-7xl m-auto px-32">Simplificamos juntos</h1>
        <ul className="flex gap-2 py-16">
          <li className="text-2xl">
            <Link href={"#"}>Supply Chain</Link>
          </li>
          <li>
            <Separator orientation="vertical" className="bg-gray-900" />
          </li>
          <li className="text-2xl">
            <Link href={"#"}>Industrial</Link>
          </li>
          <li>
            <Separator orientation="vertical" className="bg-gray-900" />
          </li>
          <li className="text-2xl">
            <Link href={"#"}>Systems</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex items-center p-6 bg-gray-800">
        <div className="w-full h-full flex items-center p-8 bg-gray-50">
          <div className="grid p-6 grid-rows-3 border rounded-xl items-center justify-center h-full w-full bg-gray-200">
            <h2 className="text-2xl bg-gray-50 w-xl py-8 text-center rounded-xl">
              LOGO
            </h2>
            <form
              className="flex flex-col gap-6 items-center"
              onSubmit={sendLogin}
            >
              <h2 className="text-2xl">LOGIN</h2>
              <Input
                placeholder="USUÁRIO"
                type="text"
                value={loginForm.username}
                name="username"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                required
              />
              <Input
                placeholder="SENHA"
                type="password"
                value={loginForm.password}
                name="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="px-10 py-6 cursor-pointer"
              >
                LOGAR
              </Button>
            </form>
            <div className="flex justify-between">
              <Link href={"#"}>ESQUECI MINHA SENHA</Link>
              <Link href={"#"}>CADASTRE-SE</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
