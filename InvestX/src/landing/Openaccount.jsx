import { Link } from "react-router-dom";

function Openaccount() {
  return (
    <div className="container p-3">
      <h2 className="mt-3">Open Account</h2>
      <p className="mt-2 mb-2">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link
        to="/register"
        className="btn btn-primary mt-2 fs-6"
        style={{ width: "20%" }}
      >
        Open your account
      </Link>
    </div>
  );
}

export default Openaccount;
