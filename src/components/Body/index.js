import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "../../routes/routes";
import { Container, Row, Col, Button, Form, Image} from "react-bootstrap";

function Body () {

    return(
        <>
            <Row>
                <Col>
                    <BrowserRouter>
                        <Rotas />
                    </BrowserRouter>
                </Col>
            </Row>
        </>
    );
}

export default Body;