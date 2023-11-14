import Hexagon from "../../assets/images/IMG_4077.jpeg";
import showcase from "../../assets/images/IMG_4554.jpeg";

function Home(){
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-8">
                        <h1>Hello! My name is Frank</h1>
                    </div>
                
                    <div className="col-sm-4">
                    <h2>I am a full stack web developer</h2>
                    <p> Mechanical engineer at Hexagon</p>
                    <p> Photographer, Video-edittor</p>

                    <img className="hexagon" src={Hexagon} alt="hexagon"  />
                    <img className="showcase" src={showcase} alt="showcase"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 