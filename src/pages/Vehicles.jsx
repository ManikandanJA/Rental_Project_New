import { useState } from "react";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import "./Vehicles.css";

function Vehicles() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredVehicles = vehicles
    .filter((v) => (filter === "all" ? true : v.type === filter))
    .filter((v) => v.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="vehicles-page">
      <h2>Available Vehicles</h2>

      <input
        type="text"
        className="search-box"
        placeholder="Search by vehicle name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={filter === "car" ? "active" : ""} onClick={() => setFilter("car")}>
          Cars
        </button>
        <button className={filter === "bike" ? "active" : ""} onClick={() => setFilter("bike")}>
          Bikes
        </button>
      </div>

      {filteredVehicles.length === 0 ? (
        <p className="no-results">No vehicles match your search.</p>
      ) : (
        <div className="vehicles-grid">
          {filteredVehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Vehicles;
