import { useState } from "react";

function Resume({ personalDetails }) {
  return (
    <>
      <h2>Resume</h2>
      <div>{personalDetails.fullName}</div>
      <div>{personalDetails.email}</div>
      <div>{personalDetails.phone}</div>
      <div>{personalDetails.address}</div>
      <div>{personalDetails.aboutMe}</div>
    </>
  );
}

export default Resume;
