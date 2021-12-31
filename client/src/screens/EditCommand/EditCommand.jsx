import React,{useState, useEffect} from "react";
import Main from "../Main/Main";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateCommandAction} from "../../actions/commandsActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import {Link} from "react-router-dom";
import axios from "axios";
import { IoChevronBackCircleSharp } from "react-icons/io5";

function EditCommand({match, history}) {
    const [title, setTitle] = useState();
    const [m1, setM1] = useState();
    const [m2, setM2] = useState();
    const [m3, setM3] = useState();
    const [m4, setM4] = useState();
    const [m5, setM5] = useState();
    const [m6, setM6] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState("");

    const dispatch = useDispatch();

    const commandUpdate = useSelector((state) => state.commandUpdate);
    const {loading, error} = commandUpdate;

    useEffect(()=> {
        const fetching = async () => {
            const {data} = await axios.get(`http://localhost:5000/api/v1/commands/${match.params.id}`);
            setTitle(data.title);
            setM1(data.m1);
            setM2(data.m2);
            setM3(data.m3);
            setM4(data.m4);
            setM5(data.m5);
            setM6(data.m6);
            setCategory(data.category);
            setDate(data.updatedAt);
        };
        fetching();
    }, [match.params.id, date]);


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


    const updateHandler = (e) => {
        if(!title || !m1 || !m2 || !m3 || !m4 || !m5 || !m6 || !category) return;
        dispatch(updateCommandAction(match.params.id, title, m1, m2, m3, m4, m5, m6, category));
        resetHandler();
        history.push("/myCommands");
    };

    return (
        <Main title="Edit Command">
            <Link to="/myCommands">
                <Button className="mb-2 d-flex align-items-center" size="lg">
                    <IoChevronBackCircleSharp className="mx-1"/>Back To Commands
                </Button>
            </Link>
            <Card className="shadow">
                <Card.Body>
                    <Form onSubmit={updateHandler}>
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
                            Update Command
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    Updating on {date.substring(0, 10)}
                </Card.Footer>
            </Card>
        </Main>
    )
};

export default EditCommand;
