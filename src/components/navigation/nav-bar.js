import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/FL-ICON.png";
import "./nav-bar.css";

function GlobalNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    <img src={Logo} alt="Frank Logo" className="frank-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Changed ml-auto to ms-auto */}
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/PhotographyPortfolio">Photography</Nav.Link>
                        <Nav.Link as={NavLink} to="/VideoProductionPortfolio">Video Production</Nav.Link>
                        <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GlobalNav;
