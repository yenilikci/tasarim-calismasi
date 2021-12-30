import {Container, Row} from "react-bootstrap";

const Main = ({ children, title }) => {
    return(
        <div className="main-back">
            <Container>
                <Row>
                    <div className="page">
                        {
                            title &&
                            (
                                <>
                                    <h1 className="heading">{title}</h1>
                                    <hr/>
                                </>
                            )
                        }
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default Main;
