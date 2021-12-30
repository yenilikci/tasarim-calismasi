import {Button, Container, Row} from "react-bootstrap";
import './landing.css'
import {useEffect} from "react";

const Landing = ({history}) => {

    //auth check
    useEffect(()=> {
        const userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/myCommands")
        }
    }, [history])

    return(
        <div className="main">
            <Container>
                <Row>
                    <div className="intro">
                        <h1 className="title">Welcome to Robotic Arm Control</h1>
                    </div>
                    <div className="button-container">
                        <a href="/login">
                            <Button size="lg" className="landing-button shadow" variant="light">
                                Login
                            </Button>
                        </a>
                        <a href="/register">
                            <Button size="lg" className="landing-button shadow" variant="dark">
                                Signup
                            </Button>
                        </a>
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default Landing;
