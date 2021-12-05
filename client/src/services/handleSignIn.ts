import React from "react";
import isEmail from "validator/lib/isEmail";
import { fetchPost } from "../utils/fetchMe";

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
    fetchPost(`${process.env.REACT_APP_SERVER}login`, signal, {
      email,
      password,
    })
      .then
      // ...
      ()
      .catch((err) => setMessage(err.message));
  }
};

export default handleSignIn;