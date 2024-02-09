import { useState } from "react";

function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const [showForm, setShowForm] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });
  /* const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });*/

  const handlePersonalDetailsChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    //setAddEducationData([...addEducationData, addEducationData.fieldName = fieldValue]);
    const newEditPersonalDetails = { ...editPersonalDetails };
    newEditPersonalDetails[fieldName] = fieldValue;
    setEditPersonalDetails(newEditPersonalDetails);
  };

  const handlePersonalDetailsSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newPersonalDetails = {
      fullName: editPersonalDetails.fullName,
      email: editPersonalDetails.email,
      phone: editPersonalDetails.phone,
      address: editPersonalDetails.address,
      aboutMe: editPersonalDetails.aboutMe,
    };

    setPersonalDetails(newPersonalDetails);
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        {""}
        <button onClick={() => setShowForm(!showForm)}>
          Edit Personal Details
        </button>
      </div>
      {showForm && (
        <>
          <PersonalDetailsForm
            personalDetails={editPersonalDetails}
            submit={handlePersonalDetailsSubmit}
            handleChange={handlePersonalDetailsChange}
          />
        </>
      )}

      {!showForm && (
        <DisplayPersonalDetails personalDetails={personalDetails} />
      )}
    </div>
  );
}

function PersonalDetailsForm({ personalDetails, submit, handleChange }) {
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          value={personalDetails.fullName}
          onChange={handleChange}
          id="fullName"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input
          value={personalDetails.email}
          onChange={handleChange}
          type="text"
          id="email"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          value={personalDetails.phone}
          onChange={handleChange}
          type="text"
          id="phone"
        />
        <label htmlFor="address">Address</label>
        <input
          value={personalDetails.address}
          onChange={handleChange}
          type="text"
          id="address"
        />
        <label htmlFor="aboutMe">About Me</label>
        <input
          value={personalDetails.aboutMe}
          onChange={handleChange}
          type="text"
          id="aboutMe"
        />

        <button type="submit">Save</button>
      </form>
    </>
  );
}

function DisplayPersonalDetails({ personalDetails }) {
  return (
    <div>
      <div>{personalDetails.fullName}</div>
      <div>{personalDetails.email}</div>
      <div>{personalDetails.phone}</div>
      <div>{personalDetails.address}</div>
      <div>{personalDetails.aboutMe}</div>
    </div>
  );
}

export default PersonalDetails;
export { DisplayPersonalDetails };
