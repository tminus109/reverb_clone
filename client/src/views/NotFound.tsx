import { Link } from "react-router-dom";

// eslint-disable-next-line react/function-component-definition
function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>
        Sorry, you did not break the internet, but we can not find what you are
        looking for.
      </p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default NotFound;
