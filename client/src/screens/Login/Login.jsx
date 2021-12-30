import {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import "./login.css"
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/userActions";

const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //auth check
    useEffect(()=> {
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/myCommands")
        }
    }, [history])

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    useEffect(()=> {
        if(userInfo) {
            history.push("/myCommands");
        }
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(login(email, password));
    }

    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <h1 className="bg-primary py-2 text-center">Login</h1>
                    </div>
                    {error && <Error variant="danger">{error}</Error>}
                    {loading && <Loading/>}
                    <Form className="p-2" onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-success">
                            Submit
                        </Button>
                    </Form>

                    <div id="formFooter" className="bg-dark">
                        <a className="underlineHover text-white" href="/register">New User?</a>
                    </div>

                </div>
            </div>

        </>
    )
};

export default Login;
