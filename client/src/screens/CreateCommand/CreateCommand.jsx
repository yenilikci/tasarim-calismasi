import React,{useState} from "react";
import Main from "../Main/Main";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createCommandAction} from "../../actions/commandsActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import ReactMarkdown from "react-markdown";

function CreateCommand({history}) {
    const [title, setTitle] = useState("");
    const [m1, setM1] = useState("");
    const [m2, setM2] = useState("");
    const [m3, setM3] = useState("");
    const [m4, setM4] = useState("");
    const [m5, setM5] = useState("");
    const [m6, setM6] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const commandCreate = useSelector((state) => state.commandCreate);
    const {loading, error, command} = commandCreate;

    const resetHandler = () => {
        setTitle("");
        setM1("");
        setM2("");
        setM3("");
        setM4("");
        setM5("");
        setM6("");
        setCategory("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createCommandAction(title, m1, m2, m3, m4, m5, m6, category));
        if(!title || m1 || m2 || m3 || m4 || m5 || m6 || category) return;
        resetHandler();
        history.push("/myCommands");
    };

    return (
        <Main title="Create a Command">
            <Card>
                <Card.Header>
                    Create a New Command
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        {error && <Error variant="danger">{error}</Error>}
                        <Form.Group controlId="title">
                            <Form.Control
                            type="title"
                            value={title}
                            placeholder="Enter the title"
                            onChange={(e) => setTitle(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Main>
    )
};

export default CreateCommand;
