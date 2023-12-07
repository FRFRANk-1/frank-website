import pdf from "./Runcheng_Resume.pdf";
import resume from "./RL_Resume.png";
import "./index.css";
function Resume() {

  return (
    <div className="App container text-center p">
      <img
        className="img-fluid hexagon hover-effect py-5"
        src={resume}
        alt="hexagon"
      />
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        <h1 className="resume py-4"> Resume </h1>
      </a>
    </div>
  );
}

export default Resume;
