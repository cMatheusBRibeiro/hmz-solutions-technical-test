"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import LoginPage from "@/components/ui/login";
import Wrapper from "@/components/ui/wrapper";

export interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  const [hasToken, setHasToken] = useState(false);

  const verifyToken = useCallback(() => {
    if (localStorage && localStorage.getItem("teste-tecnico-token")) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return hasToken ? (
    <Wrapper onLogout={verifyToken}>{children}</Wrapper>
  ) : (
    <LoginPage onGenerateToken={verifyToken} />
  );
};

export default App;
