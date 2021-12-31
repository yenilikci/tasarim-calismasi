import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import './header.css';
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/userActions";
import {GiRobotGrab} from "react-icons/gi";
import {useEffect} from "react";

const Header = ({setSearch}) => {

    const history = useHistory();

    const location = useLocation();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/');
        window.location.reload();
    }

    useEffect(() => {}, [userInfo]);

    useEffect(()=> {
        console.log('log: ' + userInfo)
    },[]);

    return (
        <Navbar expand="lg" className="d-flex my-custom-navbar">
            <Navbar.Brand>
                <Link to="/" className="header-title d-flex justify-content-center align-items-center">
                    <GiRobotGrab className="mx-1"/>
                    Robotic Arm Control
                </Link>
            </Navbar.Brand>
            {
                userInfo !== null ? ( <Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="border border-5"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Form>
                </Navbar.Brand>) : null
            }
            {/*<Nav className="d-flex justify-content-between">*/}
            {/*    <Nav.Link href="">*/}
            {/*        <Button variant="primary border border-3 border-dark" size="md">About</Button>*/}
            {/*    </Nav.Link>*/}
            {/*</Nav>*/}
            {userInfo !== null ? (<NavDropdown title="Menu" className="my-dropdown">
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
            </NavDropdown>) : null}
        </Navbar>
    )
}

export default Header;
