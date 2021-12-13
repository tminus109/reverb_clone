import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SignUpForm from "../components/forms/SignUpForm";

test("Sign-up form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUpForm />, div);
});

test("Snapshot test", () => {
  const tree = renderer.create(<SignUpForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
