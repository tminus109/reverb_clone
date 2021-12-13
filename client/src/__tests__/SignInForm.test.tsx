import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SignInForm from "../components/forms/SignInForm";

test("Form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignInForm />, div);
});

test("Snapshot", () => {
  const tree = renderer.create(<SignInForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
