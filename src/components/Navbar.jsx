import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>RentalWheels</h1>
      <Link to="/">Home</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/my-bookings">Bookings</Link>
    </nav>
  );
}

export default Navbar;