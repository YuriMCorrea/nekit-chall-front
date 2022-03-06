import React from "react";
import Img404 from "../assets/img/404nave.png";
import styled from "styled-components";

function  Pagina404 () {

	return (
		<Errinho>  
		    <main className="container flex flex--centro flex--coluna" >
		        <img className="doguito-imagem" src={Img404} alt="ilustração doguito"/>
	        </main>
	    </Errinho>
	)
};

export default Pagina404;

const Errinho = styled.div`
	h1: {
		fontSize: "20rem",
		margin: "0px",
		color: "#025554",
		"@media (max-width: 768px)": {
			fontSize: "8rem",
		},
		"@media (max-width: 425px)": {
			fontSize: "4rem",
		},
	},
	img: {
		width: "400px",
		padding: "0 15px",
		"@media (max-width: 768px)": {
			width: "120px",
		},
		"@media (max-width: 425px)": {
			width: "60px",
		},
	},
	p: {
		fontSize: "1.2rem",
	},
	span: {
		color: "#4d8887",
		fontWeight: "600",
	},
	body: {
		backgroundColor:"red"
	}
` 