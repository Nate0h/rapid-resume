import { useState } from "react";

function PersonalDetails() {
  return (
    <div>
      <h2>Personal Details</h2>

      <form>
        <label htmlFor="fullname">Fullname</label>
        <input id="fullname" name="fullname" type="text" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="telephone">Phone Number</label>
        <input type="tel" id="telephone" name="telephone" />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" />
      </form>
    </div>
  );
}

export default PersonalDetails;
