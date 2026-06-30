import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container p-3">
      <h2 className="mt-3">Login</h2>
      <Link
        to="/login"
        className="btn btn-primary mt-2 fs-6"
        style={{ width: "20%" }}
      >
        Log in to your account
      </Link>
    </div>
  );
}

export default Login;
