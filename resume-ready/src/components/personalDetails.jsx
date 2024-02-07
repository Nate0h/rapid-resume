import { useState } from "react";

function PersonalDetails() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(fullName);
  };

  return (
    <div>
      <h2>Personal Details</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullname"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
        <label htmlFor="telephone">Phone Number</label>
        <input
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          type="tel"
          id="telephone"
        />
        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          id="address"
        />
        <Display
          name={fullName}
          email={email}
          phone={telephone}
          address={address}
        />
        <button type="submit">Click Me!</button>
      </form>
    </div>
  );
}

function Display({ name, email, phone, address }) {
  return (
    <>
      <div>
        <div id="name">{name}</div>
        <div id="email">{email}</div>
        <div id="phone">{phone}</div>
        <div id="address">{address}</div>
      </div>
    </>
  );
}

export default PersonalDetails;
