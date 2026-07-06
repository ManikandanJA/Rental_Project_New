import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/" className="brand">
        Rental<span>WHEELS</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/vehicles" className={({ isActive }) => (isActive ? "active" : "")}>
          Vehicles
        </NavLink>
        {user && (
          <>
            <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "active" : "")}>
              Wishlist
            </NavLink>
            <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? "active" : "")}>
              Bookings
            </NavLink>
          </>
        )}
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/terms" className={({ isActive }) => (isActive ? "active" : "")}>
          Terms
        </NavLink>
      </div>

      <div className="nav-auth">
        {user ? (
          <div className="user-chip">
            <span>Hi, {user.name.split(" ")[0]}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
