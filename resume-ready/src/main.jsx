import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PersonalDetails from "./components/personalDetails.jsx";
import Education from "./components/education.jsx";
import Resume from "./components/resume.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
