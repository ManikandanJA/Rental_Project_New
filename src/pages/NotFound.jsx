import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! This page took a wrong turn.</p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
