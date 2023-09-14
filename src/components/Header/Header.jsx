import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/LogoMain.png";
import { Button } from "@mui/material/";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillCameraVideoFill,
  BsFillLightbulbFill,
  BsFillLightbulbOffFill,
  BsFillQuestionCircleFill
} from "react-icons/bs";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { Link } from "react-router-dom";


const HeaderNavbar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  @media (min-width: 768px) {
    position: fixed;
    z-index: 1500;
    top: 0;
  }
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;

`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  width: 100%;
  @media (min-width: 768px) {
    padding: 1rem 6rem;
    background-color: #000000dd;
  }
`;

const LogoContainer = styled.div`
  display: flex;
`

const Hamb = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  margin-left: 2rem;
  cursor: pointer;
`

const NavbarUl = styled.ul`
  background-color: #00040f;
  filter: opacity(0.9);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  list-style: none;
  z-index: 1000;
`;

export const NavbarLi = styled.li`
  color: #fff;
  margin: 1.2rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const Header = ({ materias, categoriasUnicas }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => { setToggleNavbar(!toggleNavbar);};



  return (
    <HeaderNavbar>

      <Navbar>
        <LogoContainer>
          <Link to="/"><Logo src={logo} alt="AluraFlix" /></Link>
        </LogoContainer>
        <Hamb onClick={handleToggleNavbar}>
          {toggleNavbar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Hamb>
      </Navbar>

      {toggleNavbar && (
        <NavbarUl>
          <NavbarLi>
            <BsFillCameraVideoFill />
            <Button variant="text">AGREGAR VIDEO</Button>
          </NavbarLi>
          <NavbarLi>
            <BsFillPersonFill />
            <Link to="/cuenta/mis-videos"><Button variant="text">CUENTA</Button></Link>
          </NavbarLi>
          <NavbarLi>
            <BsFillQuestionCircleFill />
            <Button variant="text">AYUDA</Button>
          </NavbarLi>
        </NavbarUl>
      )}
      <NavbarCategory toggleNavbar={toggleNavbar} materias={materias} categoriasUnicas={categoriasUnicas}>
      </NavbarCategory>
    </HeaderNavbar>

  );
};

export default Header;
