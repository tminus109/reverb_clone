import SignIn from "../components/forms/SignIn";
import SignUp from "../components/forms/SignUp";

// eslint-disable-next-line react/function-component-definition
function Access() {
  return (
    <div className="access">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default Access;
