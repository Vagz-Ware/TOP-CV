import "./styles.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Summary from ".components/Summary/Summary";
import Experience from ".components/Experience/Experience";
import GeneralInfo from ".components/GeneralInfo/GeneralInfo";
import Education from ".components/Education/Education";
import CvPreview from ".components/CvPreview/CvPreview";
import blankProfileImg from "./images/blank_profile.png";

export default function App() {
  // switch between edit mode and preview
  const [editModeActive, seteditModeActive] = useState(true);

  const handleSetEditMode = () => {
    seteditModeActive(!editModeActive);
  };

  // general info section
  const [generalInfo, setgeneralInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    photo: ""
  });

  // summary section
  const [summary, setSummary] = useState("");

  // education section
  const [education, setEducation] = useState([
    {
      school: "",
      location: "",
      from: "",
      to: "",
      qualification: "",
      achievements: ""
    }
  ]);

  const addEducationSegment = () => {
    //duplicate array
    const duplicateArray = [...education];
    //create new segment
    const newSegment = {
      school: "",
      location: "",
      from: "",
      to: "",
      qualification: "",
      achievements: ""
    };
    // push new segment to duplicate array
    duplicateArray.push(newSegment);
    //set duplicate array as new array
    setEducation(duplicateArray);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
