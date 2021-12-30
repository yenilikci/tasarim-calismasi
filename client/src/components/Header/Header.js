import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="d-flex my-custom-navbar">
                <Navbar.Brand>
                    <Link to="/" className="header-title">Robotic Arm Control</Link>
                </Navbar.Brand>
                {/*<Nav className="d-flex justify-content-between">*/}
                {/*    <Nav.Link href="">*/}
                {/*        <Button variant="primary border border-3 border-dark" size="md">About</Button>*/}
                {/*    </Nav.Link>*/}
                {/*</Nav>*/}
            <NavDropdown title="Menu" className="my-dropdown">
                <NavDropdown.Item
                    href="/myCommands"
                    className="my-dropdown-item">
                    My Commands
                </NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}

export default Header;
