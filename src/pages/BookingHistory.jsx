import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [appointments, setAppointments] = useState([]);

  async function getAppointments() {
    const { data, error } = await supabase
      .from("appointments")
      .select("*");

    if (error) {
      console.error(error);

      const savedAppointments = JSON.parse(
        localStorage.getItem("appointments") || "[]"
      );

      setAppointments(savedAppointments);
      alert("Showing bookings saved on this browser.");
      return;
    }

    setAppointments(data);
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>

      <button className="history-button" onClick={getAppointments}>
        View Appointments
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;