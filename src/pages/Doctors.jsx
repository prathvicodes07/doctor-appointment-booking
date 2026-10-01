import { Link } from "react-router-dom";

function DoctorCard(props) {
  return (
    <div className="doctor-card">
      <h2>{props.name}</h2>

      <p>Specialist: {props.specialist}</p>

      <p>Hospital: {props.hospital}</p>

      <p>Available: {props.time}</p>

      <Link className="book-button" to="/booking">
        Book Appointment
      </Link>
    </div>
  );
}

function Doctors() {
  return (
    <main className="doctors-page">
      <h1>Available Doctors</h1>

      <div className="doctors-grid">
        <DoctorCard
          name="Dr. Anil Kumar"
          specialist="General Physician"
          hospital="City Hospital"
          time="10 AM - 1 PM"
        />

        <DoctorCard
          name="Dr. Priya Sharma"
          specialist="Dermatologist"
          hospital="Care Hospital"
          time="2 PM - 5 PM"
        />

        <DoctorCard
          name="Dr. Rahul Singh"
          specialist="Cardiologist"
          hospital="Life Hospital"
          time="5 PM - 8 PM"
        />
      </div>
    </main>
  );
}

export default Doctors;