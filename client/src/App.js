import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './index.css'
import {Container} from "react-bootstrap";

const App = () => {
  return (
    <>
        <Container>
            <Header/>
                <main className="main"></main>
            <Footer/>
        </Container>
    </>
  );
}

export default App;
