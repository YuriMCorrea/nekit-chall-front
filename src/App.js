import VLibras from "@djpfs/react-vlibras";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
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
