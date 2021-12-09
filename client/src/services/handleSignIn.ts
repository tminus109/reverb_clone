import React from "react";
// import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import User from "../types/models/User";
import { fetchPost } from "../utils/fetchMe";

const handleSignIn = (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  setInvalidEmail: Function,
  setInvalidPassword: Function,
  setMessage: Function,
  setToken: Function,
  signal: AbortSignal
) => {
  // const navigate = useNavigate();

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
    fetchPost(`${process.env.REACT_APP_SERVER}signin`, signal, signinUser)
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        // navigate("/home");
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // eslint-disable-next-line no-console
          console.error("Fetch aborted by user");
        } else {
          setMessage(error.message);
        }
      });
  }
};

export default handleSignIn;
