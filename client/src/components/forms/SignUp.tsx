import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

// eslint-disable-next-line react/function-component-definition
function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [email2, setEmail2] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [invalidPassword, setInvalidPassword] = useState<string>("");
  // const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInvalidEmail("");
    setConfirmEmail("");
    setInvalidPassword("");
    // setError("");
    if (!isEmail(email)) {
      setInvalidEmail("Email is not a valid email");
    }
    if (email !== email2) {
      setConfirmEmail("Email confirmation must match email");
    }
    if (password.length < 8) {
      setInvalidPassword("Password must be at least 8 characters long");
    }
  };

  return (
    <div className="signup_form">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">
          First Name:
          <input
            id="first_name"
            type="text"
            required
            value={firstName}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFirstName((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <label htmlFor="last_name">
          Last Name:
          <input
            id="last_name"
            type="text"
            required
            value={lastName}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setLastName((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            required
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail((e.target as HTMLInputElement).value)
            }
          />
          {invalidEmail && <p>{invalidEmail}</p>}
        </label>
        <label htmlFor="email2">
          Email Confirmation:
          <input
            id="email2"
            type="text"
            required
            value={email2}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail2((e.target as HTMLInputElement).value)
            }
          />
          {confirmEmail && <p>{confirmEmail}</p>}
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="text"
            required
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword((e.target as HTMLInputElement).value)
            }
          />
          {invalidPassword && <p>{invalidPassword}</p>}
        </label>
        <span>(at least 8 characters)</span>
        <input type="submit" />
      </form>
      {/* <div className="message">{error && <p>{error}</p>}</div> */}
    </div>
  );
}

export default SignUp;
