import { useState } from "react";
import PersonalDetails from "./components/personalDetails.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";
import "./styles/App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });

  return (
    <div className="app">
      <header>Rapid Resume Plus</header>
      <main className="mainContent">
        <aside className="editResume">
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <Education />
          <Experience />
          <Skills />
        </aside>

        <div className="Resume">
          <Resume personalDetails={personalDetails} />
        </div>
      </main>
    </div>
  );
}

export default App;
