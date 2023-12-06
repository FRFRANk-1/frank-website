import React, { useEffect } from "react";
import pdf from "./Runcheng_Resume.pdf";
import resume from "./RL_Resume.png";

function Resume() {
  // useEffect(() => {
  //   window.open(pdf, "_blank");
  // }, []);

  return (
    <div className="App container text-center p">
      <img
        className="img-fluid hexagon hover-effect py-5"
        src={resume}
        alt="hexagon"
      />
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        <h1> Resume </h1>
      </a>
    </div>
  );
}

export default Resume;
