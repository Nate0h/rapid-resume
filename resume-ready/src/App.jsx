import { useState } from "react";
import PersonalDetails from "./components/personalDetails.jsx";
import Education from "./components/education.jsx";
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
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education />
      <Resume personalDetails={personalDetails} />
    </>
  );
}

export default App;
