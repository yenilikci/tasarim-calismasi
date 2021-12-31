import Main from '../Main/Main'
import {Link, useHistory} from "react-router-dom";
import {Accordion, AccordionCollapse, Badge, Button, Card, Table} from "react-bootstrap";
import "./myCommands.css"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommandAction, listCommands} from "../../actions/commandsActions";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { FaPlusCircle } from 'react-icons/fa';
import {FiDelete, FiEdit} from 'react-icons/fi';
import {BiCategory} from 'react-icons/bi';
import { BsFillCalendarDateFill } from "react-icons/bs";

const MyCommands = ({search}) => {

    const dispatch = useDispatch();

    const commandList = useSelector((state) => state.commandList);
    const {loading, commands, error} = commandList;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const commandCreate = useSelector(state => state.commandCreate);
    const {success:successCreate} = commandCreate;

    const commandUpdate = useSelector((state) => state.commandUpdate);
    const {success:successUpdate} = commandUpdate;

    const commandDelete = useSelector(state => state.commandDelete);
    const {loading:loadingDelete, error:errorDelete, success:successDelete } = commandDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteCommandAction(id))
        }
    }

    const history = useHistory();

    useEffect(() => {
        dispatch(listCommands());
        if(!userInfo){
            history.push("/");
        }
    }, [
        dispatch,
        successCreate,
        history,
        userInfo,
        successUpdate,
        successDelete
    ]);

    return (
        <Main title={`Welcome Back ${userInfo.name} !`}>
            <Link to="createCommand">
                <Button className="mb-2 d-flex align-items-center" size="lg">
                    <FaPlusCircle className="mx-1"/>Create New Command
                </Button>
            </Link>

            {/*error and loading delete*/}
            {errorDelete && <Error variant="danger">{errorDelete}</Error>}
            {loadingDelete && <Loading/>}

            {/*error and loading standart*/}
            {error && <Error variant="danger">{error}</Error>}
            {loading && <Loading/>}

            {commands?.reverse().filter((filteredNote) => filteredNote.title.toLowerCase().includes(search.toLowerCase())).map((command) => (
                <Accordion className="mt-2 shadow border-top border-5 border-dark rounded" key={command._id}>
                    <Accordion.Item eventKey={command._id}>
                        <Card className="bg-secondary border">
                            <Card.Header className="d-flex align-items-center">
                        <span className="title text-decoration-none px-0">
                            <Accordion.Header  as={Card.Text} className="shadow">
                                <span className="text-dark">{command.title}</span>
                            </Accordion.Header>
                        </span>
                                <div>
                                    <Button
                                        href={`/editCommand/${command._id}`}
                                        variant="success"
                                        className="mx-1 shadow"><FiEdit/> Edit</Button>
                                    <Button
                                        onClick={() => deleteHandler(command._id)}
                                        variant="danger"
                                        className="shadow">
                                        <FiDelete/> Delete
                                    </Button>
                                </div>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <Table striped bordered hover className="border-top border-5 border-dark">
                                        <thead className="text-center">
                                        <tr className="bg-info">
                                            <th>Degress</th>
                                            <th>Value</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center shadow">
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
                                    <blockquote className="bg-danger btn disabled">
                                        <BiCategory/> Category: {" "}
                                        <cite>
                                           {command.category}
                                        </cite>
                                    </blockquote>
                                    <blockquote className="bg-dark btn disabled mx-2">
                                       <BsFillCalendarDateFill/>  Created on: {" "}
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
