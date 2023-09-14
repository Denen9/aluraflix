import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/LogoMain.png"
import { Logo } from "../Header/Header";

const FooterContainer = styled.footer`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 2rem;
    background-color: #000;
    
`
const Copyright = styled.p`
    font-size: 0.55rem;
    color: #fff;
    font-weight: 100;
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: 2px solid blue;
`

const Footer = ()=>{
    return(
        <FooterContainer>
            <Logo src={logo}></Logo>
            <Copyright>Desarrollado por DENEN - todos los derechos reservados</Copyright>
        </FooterContainer>
    )
}

export default Footer