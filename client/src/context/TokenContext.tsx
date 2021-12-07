import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface TokenContextInterface {
  token: string;
  setToken: Function;
}

const defaultState = { token: "", setToken: () => {} };

export const TokenContext = createContext<TokenContextInterface>(defaultState);

// eslint-disable-next-line react/function-component-definition
export function TokenProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>("");
  const value = useMemo(() => ({ token, setToken }), []);
  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("TokenContext is undefined");
  }
  return context;
};
