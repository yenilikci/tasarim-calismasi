import "./footer.css"
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="my-custom-footer">
            <Container>
                <Row>
                    <Col className="text-center py-2">
                        <span>Copyright</span> &copy; <span className="fw-bold">Robotic Arm Control</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
