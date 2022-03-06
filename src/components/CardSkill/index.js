import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Modal, Card} from "react-bootstrap";
import JavaLogo from "../../assets/img/java.png";

function CardSkill () {

    const [showEditCard, setShowEditCard] = useState(false);
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [userSkill, setUserSkill] = useState({
        idSkill: 1,
        name:"Java",
        version: "11",
        description:"",
        image_url:"",
        knowledgeLevel: 5
    });

    /* função que deleta o item userSkill */
    function handleDelClick() {

    }
    /* função que edita o item userSkill */
    function handleEditClick() {
        
    }
    /* MOSTRAR E OCULTAR CARD DE EDIÇÃO */
    const handleShowEditCard = () => setShowEditCard(true);
    const handleCloseEditCard = () => setShowEditCard(false);

    /* MOSTRAR E OCULTAR CARD DE DELEÇÃO */
    const handleShowDeleteCard = () => setShowDeleteCard(true);
    const handleCloseDeleteCard = () => setShowDeleteCard(false);

    return(
        <>
            <Card style={{ margin:"0.2rem", width: '15rem' }}>
                <Card.Img variant="top" src={JavaLogo} />
                <Card.Body>
                    <Card.Title>{userSkill.name} - {userSkill.version}</Card.Title>
                    <Card.Text>
                        <h3>Nível da Skill:</h3>
                        <h4>{userSkill.knowledgeLevel} de 10</h4>
                    </Card.Text>
                    <Button 
                        variant="primary" 
                        style={{margin:"0.5rem"}}
                        onClick={()=>handleShowEditCard()}
                    >Editar
                    </Button>
                    <Button 
                        variant="danger" 
                        style={{margin:"0.5rem"}}
                        onClick={()=>handleShowDeleteCard()}
                    >Apagar
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showEditCard} onHide={handleCloseEditCard}>
                <Modal.Header closeButton>
                <Modal.Title>Editar o nível da skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Skill:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={`${userSkill.name} - ${userSkill.version}`} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Level:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Digite um numero de 1 a 10" 
                                    style={{
                                        marginTop:"0.6rem"
                                    }}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={handleCloseEditCard}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleCloseEditCard}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteCard} onHide={handleCloseDeleteCard}>
                <Modal.Header closeButton>
                <Modal.Title>Deseja deletar esta skill?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Skill:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={`${userSkill.name} - ${userSkill.version}`} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Level:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={`${userSkill.knowledgeLevel} de 10`} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={handleCloseDeleteCard}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleCloseDeleteCard}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardSkill;