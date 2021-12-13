import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "../components/forms/SignUpForm";

test("Form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpForm />, div);
});

test("Snapshot", () => {
  const tree = renderer.create(<SignUpForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("firstName input tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  // most probably these shouldn't be together
  test("Expect firstName input to be in the document", () => {
    const firstName = screen.getByTestId("first_name");
    expect(firstName).toBeInTheDocument();
    expect(firstName).toBeEnabled();
    expect(firstName).toBeRequired();
    expect(firstName).toBeVisible();
    expect(firstName).toHaveAccessibleName();
    expect(firstName).toHaveAttribute("type", "text");
    expect(firstName).toHaveValue("");
    expect(firstName.id).toBe("first_name");
    expect(firstName.tagName).toBe("INPUT");
  });

  test("Valid first namee", () => {
    const firstName = screen.getByTestId("first_name");
    userEvent.type(firstName, "Jutka");
    expect(firstName).toHaveValue("Jutka");
  });
});

describe("lastName input tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect lastName input to be in the document", () => {
    const lastName = screen.getByTestId("last_name");
    expect(lastName).toBeInTheDocument();
    expect(lastName).toBeEnabled();
    expect(lastName).toBeRequired();
    expect(lastName).toBeVisible();
    expect(lastName).toHaveAccessibleName();
    expect(lastName).toHaveAttribute("type", "text");
    expect(lastName).toHaveValue("");
    expect(lastName.id).toBe("last_name");
    expect(lastName.tagName).toBe("INPUT");
  });

  test("Valid last name", () => {
    const lastName = screen.getByTestId("last_name");
    userEvent.type(lastName, "Kiss");
    expect(lastName).toHaveValue("Kiss");
  });
});

describe("Email input tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect email input to be in the document", () => {
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
    expect(email).toBeEnabled();
    expect(email).toBeRequired();
    expect(email).toBeVisible();
    expect(email).toHaveAccessibleName();
    expect(email).toHaveAttribute("type", "text");
    expect(email).toHaveValue("");
    expect(email.id).toBe("email");
    expect(email.tagName).toBe("INPUT");
  });

  test("Valid email", () => {
    const email = screen.getByTestId("email");
    userEvent.type(email, "email@gmail.com");
    expect(email).toHaveValue("email@gmail.com");
  });

  test("Invalid email", async () => {
    const email = screen.getByTestId("first_name");
    const button = screen.getByTestId("button");
    userEvent.type(email, "email@gmail");
    userEvent.click(button);
    const error = await screen.findByText("Email is not a valid email");
    expect(error).toBeInTheDocument();
  });
});

describe("Email2 tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect email2 input to be in the document", () => {
    const email2 = screen.getByTestId("email2");
    expect(email2).toBeInTheDocument();
    expect(email2).toBeEnabled();
    expect(email2).toBeRequired();
    expect(email2).toBeVisible();
    expect(email2).toHaveAccessibleName();
    expect(email2).toHaveAttribute("type", "text");
    expect(email2).toHaveValue("");
    expect(email2.id).toBe("email2");
    expect(email2.tagName).toBe("INPUT");
  });

  test("Email2 input has value typed by user", async () => {
    const email2 = screen.getByTestId("email2");
    userEvent.type(email2, "email@gmail.com");
    expect(email2).toHaveValue("email@gmail.com");
  });

  test("Email2 input doesn't match email input", async () => {
    const email = screen.getByTestId("email");
    const email2 = screen.getByTestId("email2");
    const button = screen.getByTestId("button");
    userEvent.type(email, "mymail@gmail.com");
    userEvent.type(email2, "email@gmail.com");
    userEvent.click(button);
    const error = await screen.findByText(
      "Email confirmation must match email"
    );
    expect(error).toBeInTheDocument();
  });
});

describe("Password input tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect password input to be in the document", () => {
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
    expect(password).toBeEnabled();
    expect(password).toBeRequired();
    expect(password).toBeVisible();
    expect(password).toHaveAccessibleName();
    expect(password).toHaveAttribute("type", "text");
    expect(password).toHaveValue("");
    expect(password.id).toBe("password");
    expect(password.tagName).toBe("INPUT");
  });

  test("Valid password", () => {
    const password = screen.getByTestId("password");
    userEvent.type(password, "aaaaaaaa");
    expect(password).toHaveValue("aaaaaaaa");
  });

  test("Invalid password", async () => {
    const password = screen.getByTestId("password");
    const button = screen.getByTestId("button");
    userEvent.type(password, "");
    userEvent.click(button);
    const error = await screen.findByText(
      "Password must be at least 8 characters long"
    );
    expect(error).toBeInTheDocument();
  });
});

describe("Submit button tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect button to be in the document", () => {
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(button).toBeVisible();
    expect(button).toHaveAccessibleName();
    expect(button).toHaveAttribute("type", "submit");
    expect(button.tagName).toBe("INPUT");
  });
});
