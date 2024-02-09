import { useState } from "react";

function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(-1);
  const [experienceHistory, setExperienceHistory] = useState([]);

  const [experience, setAddExperienceData] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  const [editExperience, setEditExperienceData] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  const handleAddExperience = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newExperienceData = { ...experience };
    newExperienceData[fieldName] = fieldValue;
    setAddExperienceData(newExperienceData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newExperienceData = { ...editExperience };
    newExperienceData[fieldName] = fieldValue;
    setEditExperienceData(newExperienceData);
  };

  const handleAddExperienceSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newExperienceEntry = {
      id: id,
      company: experience.company,
      position: experience.position,
      start: experience.start,
      end: experience.end,
      location: experience.location,
      description: experience.description,
    };

    setExperienceHistory([...experienceHistory, newExperienceEntry]);
    setId(id + 1);
  };

  const handleEditClick = (event, experience) => {
    event.preventDefault();
    setEditId(experience.id);

    const editExperienceValues = {
      company: experience.company,
      position: experience.position,
      start: experience.start,
      end: experience.end,
      location: experience.location,
      description: experience.description,
    };

    setEditExperienceData(editExperienceValues);
  };
  const handleEditFormSave = (event) => {
    event.preventDefault();
    const editedExperience = {
      id: editId,
      company: editExperience.company,
      position: editExperience.position,
      start: editExperience.start,
      end: editExperience.end,
      location: editExperience.location,
      description: editExperience.description,
    };
    const newExperience = [...experienceHistory];
    const index = experienceHistory.findIndex(
      (experience) => experience.id === editId
    );

    newExperience[index] = editedExperience;
    setExperienceHistory(newExperience);
    setEditId(-1);
  };
  const handleDeleteClick = (id) => {
    setExperienceHistory(
      experienceHistory.filter((experience) => experience.id !== id)
    );

    console.log("delete joke", id);
  };

  const handleCancelClick = () => {
    setEditId(-1);
  };

  return (
    <div>
      <h2>Experience</h2>
      <button onClick={() => setShowForm(true)}> Add Experience </button>
      {showForm && (
        <ExperienceForm
          show={showForm}
          setShow={setShowForm}
          experience={handleAddExperience}
          submitExperience={handleAddExperienceSubmit}
        />
      )}

      {experienceHistory.map((experience) => {
        return (
          <div key={experience.id}>
            {experience.id === editId ? (
              <form onSubmit={handleEditFormSave}>
                <EditEntry
                  cancelEdit={handleCancelClick}
                  editExperience={editExperience}
                  editFormChange={handleEditFormChange}
                />
              </form>
            ) : (
              <ExperienceEntry
                experience={experience}
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

function ExperienceForm({ show, setShow, experience, submitExperience }) {
  return (
    <div>
      <h2>Experience</h2>

      <form onSubmit={submitExperience}>
        <label htmlFor="company">Company</label>
        <input onChange={experience} type="text" id="company" />

        <label htmlFor="position">Position Title</label>
        <input onChange={experience} type="text" id="position" />

        <label htmlFor="start">Start Date</label>
        <input onChange={experience} type="text" id="start" />

        <label htmlFor="end">End Date</label>
        <input onChange={experience} type="text" id="end" />

        <label htmlFor="location">Location</label>
        <input onChange={experience} type="text" id="location" />

        <label htmlFor="description">Location</label>
        <textarea onChange={experience} id="description" rows={5} cols={10} />

        <button onClick={() => setShow(!show)}> Remove </button>
        <button type="submit">Submit Experience</button>
      </form>
    </div>
  );
}

function ExperienceEntry({ experience, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <div>{experience.company}</div>
      <div>{experience.position}</div>
      <div>{experience.start}</div>
      <div>{experience.end}</div>
      <div>{experience.location}</div>
      <div>{experience.description}</div>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, experience)}
        >
          {" "}
          Edit{" "}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleDeleteClick(experience.id)}>
          {" "}
          Delete{" "}
        </button>
      </div>
    </>
  );
}

function EditEntry({ cancelEdit, editExperience, editFormChange }) {
  return (
    <>
      <div>
        <input
          type="text"
          id="company"
          value={editExperience.company}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="position"
          value={editExperience.position}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="start"
          value={editExperience.start}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="end"
          value={editExperience.end}
          onChange={editFormChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="location"
          value={editExperience.location}
          onChange={editFormChange}
        />
      </div>
      <div>
        <textarea
          id="description"
          value={editExperience.description}
          onChange={editFormChange}
        />
      </div>
      <div>
        <button onClick={cancelEdit}>Cancel</button>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </>
  );
}
export default Experience;
