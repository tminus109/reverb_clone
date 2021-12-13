import React, { useEffect, useState } from "react";
import { useTokenContext } from "../../context/TokenContext";
import handleSignIn from "../../services/handleSignIn";

// eslint-disable-next-line react/function-component-definition
function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");
  const [invalidPassword, setInvalidPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { setToken } = useTokenContext();
  const controller = new AbortController();

  useEffect(() => () => controller.abort());

  return (
    <div className="signin_form">
      <h1>Sign in</h1>
      <form
        onSubmit={(e) => {
          handleSignIn(
            e,
            email,
            password,
            setInvalidEmail,
            setInvalidPassword,
            setMessage,
            setToken,
            controller.signal
          );
        }}
      >
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email"
            type="text"
            required
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEmail((e.target as HTMLInputElement).value);
            }}
          />
          {invalidEmail && <p>{invalidEmail}</p>}
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            data-testid="password"
            type="text"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setPassword((e.target as HTMLInputElement).value);
            }}
          />
          {invalidPassword && <p>{invalidPassword}</p>}
        </label>
        <input type="submit" />
        <div className="message">{message && <p>{message}</p>}</div>
      </form>
    </div>
  );
}

export default SignInForm;
