import Main from '../Main/Main'
import {Link, useHistory} from "react-router-dom";
import {Accordion, AccordionCollapse, Badge, Button, Card, Table} from "react-bootstrap";
import "./myCommands.css"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listCommands} from "../../actions/commandsActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const MyCommands = () => {

    const dispatch = useDispatch();

    const commandList = useSelector((state) => state.commandList);
    const {loading, commands, error} = commandList;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            //...
        }
    }

    const history = useHistory();

    useEffect(() => {
        dispatch(listCommands());
        if(!userInfo){
            history.push("/");
        }
    }, [dispatch])

    return (
        <Main title={`Welcome Back ${userInfo.name}`}>
            <Link to="createCommand">
                <Button className="mb-2" size="lg">
                    Create New Command
                </Button>
            </Link>
            {error && <Error variant="danger">{error}</Error>}
            {loading && <Loading/>}
            {commands?.map((command) => (
                <Accordion className="my-1" key={command._id}>
                    <Accordion.Item eventKey="0">
                        <Card className="bg-gradient border">
                            <Card.Header className="d-flex align-items-center">
                        <span className="title text-decoration-none px-0">
                            <Accordion.Header eventKey="0" as={Card.Text} className="shadow">
                                <span className="text-dark">{command.title}</span>
                            </Accordion.Header>
                        </span>
                                <div>
                                    <Button
                                        href={`/editCommand/command._id`}
                                        variant="warning"
                                        className="mx-1">Edit</Button>
                                    <Button
                                        onClick={() => deleteHandler('command._id')}
                                        variant="danger">
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <h4>
                                        <Badge variant="dark" className="p-2">
                                            Category: {command.category}
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
                                            <td>{command.m1}</td>
                                        </tr>
                                        <tr>
                                            <td>M2</td>
                                            <td>{command.m2}</td>
                                        </tr>
                                        <tr>
                                            <td>M3</td>
                                            <td>{command.m3}</td>
                                        </tr>
                                        <tr>
                                            <td>M4</td>
                                            <td>{command.m4}</td>
                                        </tr>
                                        <tr>
                                            <td>M5</td>
                                            <td>{command.m5}</td>
                                        </tr>
                                        <tr>
                                            <td>M6</td>
                                            <td>{command.m6}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <blockquote className="bg-dark btn disabled">
                                        Created on {" "}
                                        <cite>
                                            {command.createdAt.substring(0, 10)}
                                        </cite>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                </Accordion>
            ))}
        </Main>
    )
};

export default MyCommands;
