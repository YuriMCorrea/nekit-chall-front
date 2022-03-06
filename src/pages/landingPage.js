import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Modal} from "react-bootstrap";

function LandingPage () {
    const [showPass, SetShowPass] = useState("password");
    const [showPassText, SetShowPassText] = useState("Mostrar senha");
    const [showCadastro, setShowCadastro] = useState(false);

    function handleShowPass() {
        showPass === "password" ? SetShowPass("text") : SetShowPass("password");
        showPassText === "Mostrar senha" ? SetShowPassText("Ocultar senha") : SetShowPassText("Mostrar senha");
    }

    const handleCloseCadastro = () => setShowCadastro(false);
    const handleShowCadastro = () => setShowCadastro(true);

    return(
        <>
            <Container style={{textAlign: "center", marginTop:"3.5rem" , width: "60%"}}>
                <Form className="mb-5">
                    <Form.Group size="sm">
                        <Form.Label>Login:</Form.Label>                
                        <Form.Control type="text" placeholder="Digite seu login" size="md"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>                
                        <Form.Control type={showPass} placeholder="Digite sua senha"></Form.Control>
                        <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => handleShowPass()}
                            style={{color: "black", textDecoration: "none"}}
                        >
                            {showPassText}
                        </Button>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button size="lg">Conectar</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button variant="outline-info" size="sm" onClick={handleShowCadastro}>Cadastre-se</Button>
                        </Col>
                    </Row>
                    <Modal show={showCadastro} onHide={handleCloseCadastro}>
                        <Modal.Header closeButton>
                        <Modal.Title>Faça seu Cadastro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group size="sm">
                                    <Form.Label>Login:</Form.Label>                
                                    <Form.Control type="text" placeholder="Digite o login desejado" size="md"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Senha:</Form.Label>                
                                    <Form.Control type={showPass} placeholder="Digite sua senha desejada"></Form.Control>
                                    <Button 
                                        variant="link" 
                                        size="sm"
                                        onClick={() => handleShowPass()}
                                        style={{color: "blue", textDecoration: "none"}}
                                    >
                                        {showPassText}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="outline-info" onClick={handleCloseCadastro}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={handleCloseCadastro}>
                            Cadastrar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </>
    );
}

export default LandingPage;