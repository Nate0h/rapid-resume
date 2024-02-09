import { useState } from "react";
import PersonalDetails from "./components/personalDetails.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";
import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });

  return (
    <>
      <div>
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <Education />
        <Experience />
        <Skills />
      </div>

      <div>
        <Resume personalDetails={personalDetails} />
      </div>
    </>
  );
}

export default App;
