import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/my-bookings">Bookings</Link>
    </nav>
  );
}

export default Navbar;