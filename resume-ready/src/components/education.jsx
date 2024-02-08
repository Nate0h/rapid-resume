import { Fragment, useState } from "react";

function Education() {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(-1);
  const [educationHistory, setEducationHistory] = useState([]);

  const [education, setAddEducationData] = useState({
    school: "",
    location: "",
    degree: "",
    start: "",
    end: "",
  });

  const [editEducation, setEditEducationData] = useState({
    school: "",
    location: "",
    degree: "",
    start: "",
    end: "",
  });

  const handleAddEducation = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    //setAddEducationData([...addEducationData, addEducationData.fieldName = fieldValue]);
    const newEducationData = { ...education };
    newEducationData[fieldName] = fieldValue;
    setAddEducationData(newEducationData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newEducationData = { ...editEducation };
    newEducationData[fieldName] = fieldValue;
    setEditEducationData(newEducationData);
  };

  const handleAddEducationSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newEducationEntry = {
      id: id,
      school: education.school,
      location: education.location,
      degree: education.degree,
      start: education.start,
      end: education.end,
    };

    setEducationHistory([...educationHistory, newEducationEntry]);
    setId(id + 1);
  };

  const handleEditClick = (event, education) => {
    event.preventDefault();
    setEditId(education.id);

    const editEducationValues = {
      school: education.school,
      location: education.location,
      degree: education.degree,
      start: education.start,
      end: education.end,
    };

    setEditEducationData(editEducationValues);
  };
  const handleEditFormSave = (event) => {
    event.preventDefault();
    const editedEducation = {
      id: editId,
      school: editEducation.school,
      location: editEducation.location,
      degree: editEducation.degree,
      start: editEducation.start,
      end: editEducation.end,
    };
    const newEducation = [...educationHistory];
    const index = educationHistory.findIndex(
      (education) => education.id === editId
    );

    newEducation[index] = editedEducation;
    setEducationHistory(newEducation);
    setEditId(-1);
  };
  const handleDeleteClick = (id) => {
    setEducationHistory(
      educationHistory.filter((education) => education.id !== id)
    );

    console.log("delete joke", id);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}> Add Education </button>
      {showForm && (
        <EducationForm
          show={showForm}
          setShow={setShowForm}
          education={handleAddEducation}
          submitEducation={handleAddEducationSubmit}
        />
      )}

      {educationHistory.map((education) => {
        return (
          <div key={education.id}>
            {education.id === editId ? (
              <form onSubmit={handleEditFormSave}>
                <EditEntry
                  key={education.id}
                  editEducation={editEducation}
                  editFormChange={handleEditFormChange}
                />
              </form>
            ) : (
              <EducationEntry
                key={education.id}
                education={education}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function EducationForm({ show, setShow, education, submitEducation }) {
  return (
    <div>
      <h2>Education</h2>

      <form onSubmit={submitEducation}>
        <label htmlFor="school">School</label>
        <input onChange={education} type="text" id="school" />

        <label htmlFor="location">Location</label>
        <input onChange={education} type="text" id="location" />

        <label htmlFor="degree">Degree</label>
        <input onChange={education} type="text" id="degree" />

        <label htmlFor="start">Start Date</label>
        <input onChange={education} type="text" id="start" />

        <label htmlFor="end">End Date</label>
        <input onChange={education} type="text" id="end" />

        <button onClick={(e) => setShow(!show)}> Remove </button>
        <button type="submit">Submit Education</button>
      </form>
    </div>
  );
}

function EducationEntry({ education, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <div>{education.school}</div>
      <div>{education.location}</div>
      <div>{education.degree}</div>
      <div>{education.start}</div>
      <div>{education.end}</div>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, education)}
        >
          {" "}
          Edit{" "}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleDeleteClick(education.id)}>
          {" "}
          Delete{" "}
        </button>
      </div>
    </>
  );
}

function EditEntry({ editEducation, editFormChange }) {
  return (
    <>
      <div>
        <input
          type="text"
          id="school"
          value={editEducation.school}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="location"
          value={editEducation.location}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="degree"
          value={editEducation.degree}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="start"
          value={editEducation.start}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="end"
          value={editEducation.end}
          onChange={editFormChange}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </>
  );
}
export default Education;
