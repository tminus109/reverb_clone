import React from "react";
import isEmail from "validator/lib/isEmail";
import { fetchPost } from "../utils/fetchMe";

const handleSignUp = async (
  e: React.FormEvent<HTMLFormElement>,
  firstName: string,
  lastName: string,
  email: string,
  email2: string,
  password: string,
  setInvalidEmail: Function,
  setConfirmEmail: Function,
  setInvalidPassword: Function,
  setMessage: Function,
  signal: AbortSignal
) => {
  e.preventDefault();
  setInvalidEmail("");
  setConfirmEmail("");
  setInvalidPassword("");

  if (!isEmail(email)) {
    setInvalidEmail("Email is not a valid email");
  }
  if (email !== email2) {
    setConfirmEmail("Email confirmation must match email");
  }
  if (password.length < 8) {
    setInvalidPassword("Password must be at least 8 characters long");
  }

  if (firstName && lastName && isEmail(email) && password.length >= 8) {
    fetchPost(`${process.env.REACT_APP_SERVER}signup`, signal, {
      firstName,
      lastName,
      email,
      password,
    })
      .then((res) => setMessage(res.message))
      .catch((err) => {
        if (err.name === "AbortError") {
          // eslint-disable-next-line no-console
          console.error("Fetch aborted by user");
        } else {
          setMessage(err.message);
        }
      });
  }
};

export default handleSignUp;
