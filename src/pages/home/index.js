import Hexagon from "../../assets/images/IMG_4077.jpeg";
import showcase from "../../assets/images/IMG_4554.jpeg";
import "./index.css";

function Home() {
  return (
    <div>
      <div className="container border-top border-secondary ">
        <div className="row">
          <div className="col intro ">
            <h1>
              {" "}
              <br></br>
            </h1>
            <h1 className="intro descrip-1">Hi! My name is Frank</h1>
          </div>

          <div className=" ">
            <h2 className="intro descrip-2">
              I am an inspired graduate student in Computer Science at
              Northeastern University
            </h2>
            <p className="work experience">Previous Work experience: </p>
            <li className="list">
              Mechanical design engineer: Hexagon Manufacturing Intelligence
              (RI)
              <li>Manufacturing engineer: Global Bedding Solution (MA) </li>
            </li>

            <div className="hexagon ">
              <img
                className="img-fluid hexagon hover-effect py-5"
                src={Hexagon}
                alt="hexagon"
              />

              <img
                className="img-fluid showcase hover-effect py-5"
                src={showcase}
                alt="showcase"
              />
            </div>
            <p className="hexagon-text">Hexagon Tempo drawer support system</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
