import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SignInForm from "../components/forms/SignInForm";

test("Sign-in form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignInForm />, div);
});

test("Snapshot test", () => {
  const tree = renderer.create(<SignInForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
