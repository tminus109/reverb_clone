import React from "react";
import isEmail from "validator/lib/isEmail";

const handleSignUp = async (
  e: React.FormEvent<HTMLFormElement>,
  firstName: string,
  setFirstName: Function,
  lastName: string,
  setLastName: Function,
  email: string,
  setEmail: Function,
  email2: string,
  setEmail2: Function,
  password: string,
  setPassword: Function,
  invalidEmail: string,
  setInvalidEmail: Function,
  confirmEmail: string,
  setConfirmEmail: Function,
  invalidPassword: string,
  setInvalidPassword: Function,
  error: string,
  setError: Function
) => {
  e.preventDefault();
  setInvalidEmail("");
  setConfirmEmail("");
  setInvalidPassword("");
  setError("");
  if (!isEmail(email)) {
    setInvalidEmail("Email is not a valid email");
  }
  if (email !== email2) {
    setConfirmEmail("Email confirmation must match email");
  }
  if (password.length < 8) {
    setInvalidPassword("Password must be at least 8 characters long");
  }
  setError("No error : )");
};

export default handleSignUp;
