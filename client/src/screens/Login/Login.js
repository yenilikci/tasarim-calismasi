import "./login.css"
import {Button, Form} from "react-bootstrap";

const Login = () => {
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <h1 className="bg-primary py-2 text-center">Login</h1>
                    </div>

                    <Form className="p-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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
