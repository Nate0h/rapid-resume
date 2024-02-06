import { useState } from "react";

function PersonalDetails() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");

  function handleFullNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleTelephoneChange(e) {
    setTelephone(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  return (
    <div>
      <h2>Personal Details</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="fullname">Fullname</label>
        <input
          value={fullName}
          onChange={handleFullNameChange}
          id="fullname"
          type="text"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          id="email"
        />

        <label htmlFor="telephone">Phone Number</label>
        <input
          value={telephone}
          onChange={handleTelephoneChange}
          type="tel"
          id="telephone"
        />

        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={handleAddressChange}
          type="text"
          id="address"
        />
        <div>
          {fullName} {email} {telephone} {address}
        </div>
        <button onClick={Display}>Click Me!</button>
      </form>
    </div>
  );
}

function Display() {
  const name = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phoneNo = document.getElementById("telephone");
  const address = document.getElementById("address");

  alert(name.value);
  return (
    <>
      <div>
        <div>{name.value}</div>
        <div>{email.value}</div>
        <div>{phoneNo.value}</div>
        <div>{address.value}</div>
      </div>
    </>
  );
}

export default PersonalDetails;
