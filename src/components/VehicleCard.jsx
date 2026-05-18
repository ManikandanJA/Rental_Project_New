import { useNavigate } from "react-router-dom";

function VehicleCard({ vehicle }) {
  const navigate = useNavigate();

  if (!vehicle) return null;

  return (
    <div className="card">
      <img src={vehicle.image} />
      <h3>{vehicle.name}</h3>
      <p>₹{vehicle.price}</p>

      <button onClick={() => navigate(`/details/${vehicle.id}`)}>
        Book
      </button>
    </div>
  );
}

export default VehicleCard;