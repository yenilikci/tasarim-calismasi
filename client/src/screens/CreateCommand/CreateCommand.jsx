import React,{useState} from "react";
import Main from "../Main/Main";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createCommandAction} from "../../actions/commandsActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import {Link} from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

function CreateCommand({history}) {
    const [title, setTitle] = useState("");
    const [m1, setM1] = useState(0);
    const [m2, setM2] = useState(0);
    const [m3, setM3] = useState(0);
    const [m4, setM4] = useState(0);
    const [m5, setM5] = useState(0);
    const [m6, setM6] = useState(0);
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const commandCreate = useSelector((state) => state.commandCreate);
    const {loading, error, command} = commandCreate;

    const resetHandler = () => {
        setTitle("");
        setM1(0);
        setM2(0);
        setM3(0);
        setM4(0);
        setM5(0);
        setM6(0);
        setCategory("");
    };

    const submitHandler = (e) => {
        if(!title || !m1 || !m2 || !m3 || !m4 || !m5 || !m6 || !category) return;
        dispatch(createCommandAction(title, m1, m2, m3, m4, m5, m6, category));
        resetHandler();
        history.push("/myCommands");
    };

    return (
        <Main title="Create a Command">
            <Link to="myCommands">
                <Button className="mb-2 d-flex align-items-center" size="lg">
                    <IoChevronBackCircleSharp className="mx-1"/>Back To Commands
                </Button>
            </Link>
            <Card className="shadow">
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        {error && <Error variant="danger">{error}</Error>}
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                            type="title"
                            value={title}
                            placeholder="Enter the title"
                            onChange={(e) => setTitle(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M1</Form.Label>
                            <Form.Control
                                type="number"
                                value={m1}
                                placeholder="Enter m1 value"
                                onChange={(e) => setM1(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M2</Form.Label>
                            <Form.Control
                                type="number"
                                value={m2}
                                placeholder="Enter m2 value"
                                onChange={(e) => setM2(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M3</Form.Label>
                            <Form.Control
                                type="number"
                                value={m3}
                                placeholder="Enter m3 value"
                                onChange={(e) => setM3(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M4</Form.Label>
                            <Form.Control
                                type="number"
                                value={m4}
                                placeholder="Enter m4 value"
                                onChange={(e) => setM4(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M5</Form.Label>
                            <Form.Control
                                type="number"
                                value={m5}
                                placeholder="Enter m5 value"
                                onChange={(e) => setM5(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>M6</Form.Label>
                            <Form.Control
                                type="number"
                                value={m6}
                                placeholder="Enter m6 value"
                                onChange={(e) => setM6(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="my-1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="title"
                                value={category}
                                placeholder="Enter the category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        {loading && <Loading size={50} />}
                        <Button onClick={resetHandler} variant="danger">
                            Reset Fields
                        </Button>
                        <Button type="submit" variant="success" className="mx-2">
                            Create Command
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    Creating on {new Date().toLocaleDateString()}
                </Card.Footer>
            </Card>
        </Main>
    )
};

export default CreateCommand;
