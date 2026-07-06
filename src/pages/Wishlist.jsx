import { useState } from "react";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import { getWishlist } from "../utils/wishlist";
import "./Wishlist.css";

function Wishlist() {
  const [, forceUpdate] = useState(0);
  const wishlistIds = getWishlist();
  const wishlistVehicles = vehicles.filter((v) => wishlistIds.includes(v.id));

  return (
    <div className="wishlist-page">
      <h2>My Wishlist ❤️</h2>

      {wishlistVehicles.length === 0 ? (
        <p className="empty">
          No vehicles saved yet. Tap the 🤍 icon on any vehicle to save it here.
        </p>
      ) : (
        <div className="vehicles-grid">
          {wishlistVehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} onWishlistChange={() => forceUpdate((n) => n + 1)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
