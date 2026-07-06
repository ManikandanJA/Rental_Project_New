import { jsPDF } from "jspdf";
import { getUser } from "../utils/auth";
import "./MyBookings.css";

function MyBookings() {
  const user = getUser();
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const myBookings = allBookings
    .map((b, index) => ({ ...b, _index: index }))
    .filter((b) => b.phone === user.phone);

  const cancel = (index) => {
    const data = [...allBookings];
    data.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(data));
    window.location.reload();
  };

  const downloadPDF = (b) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Vehicle Rental Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${b.username}`, 20, 40);
    doc.text(`Phone: ${b.phone}`, 20, 50);
    doc.text(`Vehicle: ${b.name}`, 20, 60);
    doc.text(`Type: ${b.type}`, 20, 70);
    doc.text(`Dates: ${b.startDate} to ${b.endDate}`, 20, 80);
    doc.text(`Amount: Rs.${b.total}`, 20, 90);

    doc.save(`booking-${b.name.replace(/\s+/g, "-")}.pdf`);
  };

  return (
    <div className="bookings">
      <h2>My Bookings</h2>

      {myBookings.length === 0 ? (
        <p className="empty">No bookings yet. Go book a vehicle you like!</p>
      ) : (
        myBookings.map((b) => (
          <div key={b._index} className="booking-card">
            <h3>
              {b.name} ({b.type === "car" ? "🚗" : "🏍️"} {b.type})
            </h3>

            <p>
              <strong>Name:</strong> {b.username}
            </p>
            <p>
              <strong>Phone:</strong> {b.phone}
            </p>
            <p>
              <strong>Dates:</strong> {b.startDate} to {b.endDate}
            </p>
            <p>
              <strong>Amount:</strong> ₹{b.total}
            </p>

            <button className="cancel-btn" onClick={() => cancel(b._index)}>
              Cancel
            </button>
            <button className="pdf-btn" onClick={() => downloadPDF(b)}>
              Download PDF
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;
