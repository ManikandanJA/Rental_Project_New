import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import vehicles from "../data/vehicles";
import { getUser } from "../utils/auth";
import { isWishlisted, toggleWishlist } from "../utils/wishlist";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getUser();

  const v = vehicles.find((x) => x.id == id);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState("");
  const [liked, setLiked] = useState(v ? isWishlisted(v.id) : false);

  const today = new Date().toISOString().split("T")[0];

  if (!v) {
    return (
      <div className="details">
        <h2>Vehicle not found</h2>
        <button className="btn-primary" onClick={() => navigate("/vehicles")}>
          Back to Vehicles
        </button>
      </div>
    );
  }

  const days =
    start && end ? Math.round((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) : 0;

  const total = days > 0 ? days * v.price : 0;

  const handleBooking = () => {
    setError("");

    if (!start || !end) {
      setError("Please select both start and end dates");
      return;
    }

    if (new Date(start) < new Date(today)) {
      setError("Start date cannot be in the past");
      return;
    }

    if (days <= 0) {
      setError("End date must be after the start date");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      vehicleId: v.id,
      name: v.name,
      type: v.type,
      price: v.price,
      startDate: start,
      endDate: end,
      total: Number(total),
      username: user.name,
      phone: user.phone,
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    navigate("/my-bookings");
  };

  return (
    <div className="details">
      <div className="details-top">
        <img src={v.image} alt={v.name} />

        <div className="details-info">
          <h2>{v.name}</h2>
          <p className="type-tag">{v.type === "car" ? "🚗 Car" : "🏍️ Bike"}</p>
          <h3 className="price">₹{v.price}/day</h3>
          <button
            className={`wishlist-toggle ${liked ? "liked" : ""}`}
            onClick={() => setLiked(toggleWishlist(v.id))}
          >
            {liked ? "❤️ Saved to Wishlist" : "🤍 Add to Wishlist"}
          </button>
        </div>
      </div>

      <div className="booking-box">
        <h3>Booking for {user.name}</h3>
        <p className="phone-note">📞 {user.phone}</p>

        {error && <p className="booking-error">{error}</p>}

        <label>Start Date</label>
        <input type="date" min={today} value={start} onChange={(e) => setStart(e.target.value)} />

        <label>End Date</label>
        <input
          type="date"
          min={start || today}
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        {days > 0 && (
          <p className="days-note">
            {days} day{days > 1 ? "s" : ""} selected
          </p>
        )}

        <h3>Total ₹{total}</h3>

        <button className="btn-primary" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Details;
