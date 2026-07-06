import { useNavigate } from "react-router-dom";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

function Home() {
  const navigate = useNavigate();
  const featured = vehicles.slice(0, 4);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Rent Cars &amp; Bikes 🚗🏍️</h1>
          <p>Affordable self-drive rentals, ready whenever you are.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("/vehicles")}>
              Browse Vehicles
            </button>
            <button className="btn-outline" onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <h3>{vehicles.length}+</h3>
          <p>Vehicles</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
        <div className="stat">
          <h3>2</h3>
          <p>Cities Growing</p>
        </div>
      </div>

      <section className="featured">
        <h2>Featured Vehicles</h2>
        <div className="vehicles-grid">
          {featured.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
        <div className="see-all">
          <button className="btn-outline" onClick={() => navigate("/vehicles")}>
            See All Vehicles →
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
