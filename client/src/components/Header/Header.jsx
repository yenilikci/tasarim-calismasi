import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import './header.css';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/userActions";
import {GiRobotGrab} from "react-icons/gi";

const Header = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);

    const {userInfo} = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/');
    }

    return (
        <Navbar expand="lg" className="d-flex my-custom-navbar">
            <Navbar.Brand>
                <Link to="/" className="header-title d-flex justify-content-center align-items-center">
                    <GiRobotGrab className="mx-1"/>
                    Robotic Arm Control</Link>
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
                <NavDropdown.Item
                    onClick={logoutHandler}
                >
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}

export default Header;
