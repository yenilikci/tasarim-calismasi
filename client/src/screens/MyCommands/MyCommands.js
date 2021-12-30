import Main from '../Main/Main'
import {Link} from "react-router-dom";
import {Badge, Button, Card, Table} from "react-bootstrap";
import "./myCommands.css"

const MyCommands = () => {

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {

        }
    }

    return (
        <Main title="Welcome back..">
            <Link to="createCommand">
                <Button className="mb-2" size="lg">
                    Create New Command
                </Button>
            </Link>
            <Card className="bg-gradient border">
                <Card.Header className="d-flex">
                    <span className="title text-decoration-none">Simple Movement</span>
                    <div>
                        <Button
                            href={`/editCommand/command._id`}
                            variant="secondary">Edit</Button>
                        <Button
                            onClick={() => deleteHandler('command._id')}
                            variant="danger" className="mx-1">
                            Delete
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <h4>
                        <Badge variant="dark">
                            Category: Default
                        </Badge>
                    </h4>
                    <Table striped bordered hover>
                        <thead className="text-center">
                        <tr>
                            <th>Degress</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>M1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>M2</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>M3</td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td>M4</td>
                            <td>170</td>
                        </tr>
                        <tr>
                            <td>M5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>M6</td>
                            <td>73</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Main>
    )
};

export default MyCommands;
