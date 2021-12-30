import './register.css'
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("https://placeimg.com/640/480/any");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [pictureMessage, setPictureMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        //password confirm
        if(password !== confirmPassword) {
            setMessage("Passwords Don't Match")
        } else {
            setMessage(null);
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                setLoading(true)
                const data = await axios.post("http://localhost:5000/api/v1/users/register",
                    {name, picture, email, password},
                    config
                );

                setLoading(false);
                localStorage.setItem("userInfo",JSON.stringify(data.data));
            } catch (err) {
                setError(err.response.data.message);
                setLoading(false);
            }
        }
    }

    const postDetails = (picture) => {
        if(picture === "https://placeimg.com/640/480/any"){
            return setPictureMessage("Please Select An Image")
        }
        setPictureMessage(null)
        if(picture.type === "image/jpeg" || picture.type === "image/png"){
            const data = new FormData();
            data.append('file',picture);
            data.append('upload_preset','robotic-arm');
            data.append('cloud_name','dgvt5guwq');
            fetch('https://api.cloudinary.com/v1_1/dgvt5guwq/image/upload', {
                method: "post",
                body: data
            }).then(res => res.json()).then(data => {
                console.log(data)
                setPicture(data.url.toString());
            })
        }else {
            return setPictureMessage("Please Select An Image")
        }
    }

    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <h1 className="bg-primary py-2 text-center">Register</h1>
                    </div>
                    {message && <Error variant="danger">{message}</Error>}
                    {error && <Error variant="danger">{error}</Error>}
                    {loading && <Loading/>}
                    <Form className="p-2" onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        {pictureMessage && (
                            <Error variant="danger">{pictureMessage}</Error>
                        )}
                        <Form.Group className="mb-3" controlId="picture">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => postDetails(e.target.files[0])}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-success">
                            Submit
                        </Button>
                    </Form>

                    <div id="formFooter" className="bg-dark">
                        <a className="underlineHover text-white" href="/login">Do You Already Have An Account?
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
};

export default Register;
