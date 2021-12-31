import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Landing from "./screens/Landing/Landing";
import MyCommands from "./screens/MyCommands/MyCommands"
import CreateCommand from "./screens/CreateCommand/CreateCommand"
import EditCommand from "./screens/EditCommand/EditCommand";
import './index.css'
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <main>
                    <Route path="/" component={Landing} exact/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/createCommand" component={CreateCommand}/>
                    <Route path="/editCommand/:id" component={EditCommand}/>
                    <Route path="/myCommands" component={() => <MyCommands/>}/>
                </main>
                <Footer/>
            </Container>
        </BrowserRouter>
    );
}

export default App;
