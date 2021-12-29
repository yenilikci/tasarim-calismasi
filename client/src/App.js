import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./screens/Landing/Landing";
import MyCommands from "./screens/MyCommands/MyCommands"
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
                        <Route path="/myCommands" component={() => <MyCommands/> } />
                    </main>
                    <Footer/>
                </Container>
    </BrowserRouter>
  );
}

export default App;
