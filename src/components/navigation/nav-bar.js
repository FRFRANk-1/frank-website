import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/FL-ICON.png";
import "./nav-bar.css";

function GlobalNav() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-8">
                    <div className="frosted-glass">
                        <Navbar variant="dark" expand="lg" className="navbar-content">
                            <Link to="home" className="logo div" >
                            <img className="frank-logo" src={Logo} alt="Frank Logo"  />
                            </Link>
                        </Navbar>
                    </div>
                </div>
                <div class="col-sm-4">
                    <h1>djaio</h1>
                </div>
            </div>
        </div>
    )
}

export default GlobalNav;