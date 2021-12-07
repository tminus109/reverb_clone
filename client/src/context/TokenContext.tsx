import { createContext, FC, useState } from "react";

interface TokenContextInterface {
  token: string;
  setToken: Function;
}

const defaultState = { token: "", setToken: () => {} };

export const TokenContext = createContext<TokenContextInterface>(defaultState);

// eslint-disable-next-line react/function-component-definition
export const TokenProvider: FC = (children) => {
  const [token, setToken] = useState(defaultState.token);
  return (
    <TokenContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
