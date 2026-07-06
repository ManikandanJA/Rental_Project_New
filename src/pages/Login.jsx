import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/vehicles";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Please enter both name and phone number");
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      setError("Enter a valid 10-digit phone number");
      return;
    }

    loginUser(name, phone);
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <p className="login-subtext">
          Login to browse vehicles and manage your bookings
        </p>

        {error && <p className="login-error">{error}</p>}

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
