import React, { useContext } from "react";
import isEmail from "validator/lib/isEmail";
import { TokenContext } from "../context/TokenContext";
import User from "../types/models/User";
import { fetchPost } from "../utils/fetchMe";

const { setToken } = useContext(TokenContext);

const handleSignIn = (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  setInvalidEmail: Function,
  setInvalidPassword: Function,
  setMessage: Function,
  signal: AbortSignal
) => {
  e.preventDefault();
  setInvalidEmail("");
  setInvalidPassword("");
  setMessage("");

  if (!isEmail(email)) {
    setInvalidEmail("Email is not a valid email");
  }
  if (password.length < 8) {
    setInvalidPassword("Password must be at least 8 characters long");
  }

  if (isEmail(email) && password.length >= 8) {
    const signinUser: User = { email, password };
    fetchPost(`${process.env.REACT_APP_SERVER}login`, signal, signinUser)
      .then((data) => localStorage.setItem("token", data))
      .then((data) => setToken(data))
      .catch((err) => setMessage(err.message));
  }
};

export default handleSignIn;
