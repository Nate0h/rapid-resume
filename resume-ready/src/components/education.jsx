import { useState } from "react";

function Education() {
  const [showForm, setShowForm] = useState(false);
  const [educationHistory, setEducationHistory] = useState([]);
  const [id, setId] = useState(0);
  const handleAddEducation = (education) => {
    const currEducation = {
      id: id,
      school: education.school,
      location: education.location,
      degree: education.degree,
      start: education.startDate,
      end: education.endDate,
    };

    setId(id + 1);
    setEducationHistory([...educationHistory, currEducation]);
  };

  return (
    <div>
      <button onClick={(e) => setShowForm(true)}> Add Education </button>
      {showForm && (
        <EducationForm
          addEducation={handleAddEducation}
          setShow={setShowForm}
          show={showForm}
        />
      )}

      {educationHistory.map((education) => (
        <>
          <EducationEntry key={education.id} />
        </>
      ))}
    </div>
  );
}

function EducationForm({ addEducation, setShow, show }) {
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation({ school, location, degree, startDate, endDate });
    setSchool("");
    setLocation("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setShow(!show);
  };

  return (
    <div>
      <h2>Education</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="school">School</label>
        <input
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          type="text"
          id="school"
        />
        <label htmlFor="location">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          id="location"
        />
        <label htmlFor="degree">Degree</label>
        <input
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          type="text"
          id="degree"
        />
        <label htmlFor="start">Start Date</label>
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          type="text"
          id="start"
        />
        <label htmlFor="end">End Date</label>
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          type="text"
          id="end"
        />
        <button onClick={(e) => setShow(!show)}> Remove </button>
        <button type="submit">Click Me!</button>
      </form>
    </div>
  );
}

function EducationEntry() {}

export default Education;
