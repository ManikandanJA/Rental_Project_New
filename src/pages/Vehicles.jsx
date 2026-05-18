import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

function Vehicles() {
  return (
    <div className="grid">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </div>
  );
}

export default Vehicles;