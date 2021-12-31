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
                                    <hr/>
                                    <h3 className="heading d-inline bg-gradient p-2 shadow rounded">{title}</h3>
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
