import "./footer.css"
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="my-custom-footer">
            <Container>
                <Row>
                    <Col className="text-center py-2">
                        Copyright &copy; Robotic Arm Control
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
