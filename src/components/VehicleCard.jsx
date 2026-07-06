import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isWishlisted, toggleWishlist } from "../utils/wishlist";
import "./VehicleCard.css";

function VehicleCard({ vehicle, onWishlistChange }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(vehicle ? isWishlisted(vehicle.id) : false);

  if (!vehicle) return null;

  const handleWishlist = (e) => {
    e.stopPropagation();
    const nowLiked = toggleWishlist(vehicle.id);
    setLiked(nowLiked);
    if (onWishlistChange) onWishlistChange();
  };

  return (
    <div className="card">
      <button
        className={`wishlist-btn ${liked ? "liked" : ""}`}
        onClick={handleWishlist}
        aria-label="Toggle wishlist"
      >
        {liked ? "❤️" : "🤍"}
      </button>

      <span className="badge">{vehicle.type === "car" ? "🚗 Car" : "🏍️ Bike"}</span>

      <img src={vehicle.image} alt={vehicle.name} />

      <div className="card-body">
        <h3>{vehicle.name}</h3>
        <p className="price">₹{vehicle.price} / day</p>

        <button className="book-btn" onClick={() => navigate(`/details/${vehicle.id}`)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
