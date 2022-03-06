import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import Pagina404 from "../pages/error";


function Rotas(){
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="*" element={<Pagina404 />} />
            </Routes>
        </>
    );
}

export default Rotas;