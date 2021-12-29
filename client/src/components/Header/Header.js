import {Navbar, Nav, Container, Button} from "react-bootstrap";
import './header.css';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand className="header-title" href="/">Robotic Arm Control</Navbar.Brand>
                <Nav className="d-flex justify-content-between">
                    <Nav.Link href="/logout">
                        <Button variant="dark" size="md">Logout</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
