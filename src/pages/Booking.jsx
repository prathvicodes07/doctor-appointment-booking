import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function handleBooking() {
    if (!name || !doctor || !date || !time) {
      alert("Please fill all the details");
      return;
    }

    const { error } = await supabase
      .from("appointments")
      .insert([
        {
          name: name,
          doctor: doctor,
          date: date,
          time: time
        }
      ]);

    if (error) {
      console.error(error);

      // Save it in the browser if Supabase is not ready yet
      const oldAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
      const newAppointment = {
        id: Date.now(),
        name: name,
        doctor: doctor,
        date: date,
        time: time
      };

      oldAppointments.push(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(oldAppointments));

      alert("Booking saved on this browser. Supabase table is not ready yet.");
      return;
    }

    alert("Appointment booked successfully!");
  }

  return (
    <main className="booking-page">
      <h1>Book Appointment</h1>

      <div className="booking-form">
        <label htmlFor="name">Patient Name</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="doctor">Select Doctor</label>

        <select
          id="doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">-- Select Doctor --</option>
          <option value="Dr. Anil Kumar">Dr. Anil Kumar</option>
          <option value="Dr. Priya Sharma">Dr. Priya Sharma</option>
          <option value="Dr. Rahul Singh">Dr. Rahul Singh</option>
        </select>

        <label htmlFor="date">Appointment Date</label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time">Appointment Time</label>

        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">-- Select Time --</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
        </select>

        <button onClick={handleBooking}>
          Book Appointment
        </button>
      </div>

      <section className="booking-details">
        <h3>Appointment Details</h3>

        <p>Name: <strong>{name || "-"}</strong></p>
        <p>Doctor: <strong>{doctor || "-"}</strong></p>
        <p>Date: <strong>{date || "-"}</strong></p>
        <p>Time: <strong>{time || "-"}</strong></p>
      </section>
    </main>
  );
}

export default Booking;