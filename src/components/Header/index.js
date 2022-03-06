import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Image} from "react-bootstrap";
import LogoNekit from '../../assets/img/NEKI_IT_Logo.png';

function Header () {
    const [greet, setGreet] = useState("Desafio");
    const [usuario, setUsuario] = useState({
        logged: true,
        idUsuario: "1",
        login: "YuriMCorrea",
        senha: "teste",
    });

    useEffect(() => { 
        usuario.logged === false ? setGreet("Desafio") : setGreet(`Olá, ${usuario.login}`)
    }, [usuario]);


    return(
        <>
            <Row fluid style={{backgroundColor:"rgba(1, 8, 150, 0.7)", paddingTop:"1rem", boxShadow:"0px 5px 10px black"}}>
                <Col style={{fontSize:"1.5rem", color:"lightblue"}}>
                <Image src={LogoNekit} alt="Logo Neki-IT"/> 
                    <h1>{greet}</h1>
                </Col>
            </Row>
        </>
    );
}

export default Header;