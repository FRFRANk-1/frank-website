import Hexagon from "../../assets/images/IMG_4077.jpeg";
import showcase from "../../assets/images/IMG_4554.jpeg";
import "./index.css";

function Home() {
  return (
    <div>
      <div className="container text-center">
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
              <li>Manufacturing engineer: Global Bedding Solution</li>
            </li>

            <center>
              <img
                className="img hexagon text-center"
                src={Hexagon}
                alt="hexagon"
              />
            </center>

            <center>
              <img className="img showcase" src={showcase} alt="showcase" />
              <p className="hexagon-text">
                Hexagon Tempo drawer support system
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
