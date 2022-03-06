import VLibras from "@djpfs/react-vlibras";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import './App.css';

function App() {
  return (
        <>
            <div className="App">
              <VLibras />
              <Container fluid>
                <Header />
                <Body />
              </Container>
            </div>
        </>
  );
}

export default App;
