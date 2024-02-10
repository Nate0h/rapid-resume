import { useState } from "react";
import "../styles/Resume.css";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import address from "../assets/address.png";

function Resume({ personalDetails }) {
  return (
    <div className="displayResume">
      <div className="header">
        <h1>{personalDetails.fullName}</h1>
        <div className="contactDetails">
          <div className="contactInfo">
            <img src={email} alt="" />
            <div>{personalDetails.email}</div>
          </div>

          <div className="contactInfo">
            <img src={phone} alt="" />
            <span>{personalDetails.phone}</span>
          </div>
          <div className="contactInfo">
            <img src={address} alt="" />
            <span>{personalDetails.address}</span>
          </div>
        </div>
      </div>
      <h2 className="sectionHeader">About Me</h2>
      <p className="aboutMeText">{personalDetails.aboutMe}</p>

      <h2 className="sectionHeader">Education</h2>
      <h2 className="sectionHeader">Experience</h2>
      <h2 className="sectionHeader">Skills and Technologies</h2>
    </div>
  );
}

export default Resume;
