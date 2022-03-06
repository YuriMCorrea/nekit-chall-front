import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Modal} from "react-bootstrap";
import CardSkill from "../Components/CardSkill";

function Home () {

    return(
        <>
            <Container className="mt-3" style={{color:"lightgreen"}}>
                <h2>Sua lista de Skills</h2>
                <Container 
                    className="justify-content-md-center" 
                    style={{
                        width:"100%", 
                        display:"flex", 
                        justifyContent:"flex-start", 
                        boxSizing:"border-box",
                        flexWrap:"wrap",
                        color:"black"
                }}>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                    <CardSkill/>
                </Container>
            </Container>
        </>
    );
}

export default Home;