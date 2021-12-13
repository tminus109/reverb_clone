import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { cleanup, render, screen } from "@testing-library/react";
import SignUpForm from "../components/forms/SignUpForm";

afterEach(cleanup);

test("Form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpForm />, div);
});

test("Snapshot", () => {
  const tree = renderer.create(<SignUpForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("firstName-input tests", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  test("Expect firstName input to be in the document", async () => {
    const firstNameInput = await screen.findByTestId("first_name");
    expect(firstNameInput).toBeInTheDocument();
  });
});
