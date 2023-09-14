import React, { useState } from "react";
import styled from "styled-components";
import { NavbarLi } from "../Header/Header";
import { Button } from "@mui/material";
import { AiFillCloseCircle, AiOutlineDown } from "react-icons/ai";




const NavbarCategoryHeader = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    .navbarCategoryNav Button{
        margin: 0.5rem 0 0.5rem 0rem;
    }
    
`
const NavbarUlCategory = styled.ul`
    background-color: #000000ea;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 0;
    width: 100%;
    height: 1000px;
    z-index: 3000;
    top: 0;
    left: 0;
    .navbarCategoryClose{
        font-size: 3rem;
        position: fixed;
        color: #fff;
        top: 0;
        margin-top: 3rem;
        filter: drop-shadow(0 0 4px #000000)
    }
`

const NavbarCategory = ({materias, categoriasUnicas})=>{

    const [toggleCategory, setToggleCategory] = useState(false)

    const handletoggleCategory = ()=>{
        setToggleCategory(!toggleCategory)
    }
    return(
        <NavbarCategoryHeader>
            <div className="navbarCategoryNav">
                <Button variant="outlined" size="small" onClick={handletoggleCategory}>Recomendados</Button>
                <Button variant="outlined" size="small" onClick={handletoggleCategory}>Nuevo</Button>
                <Button variant="outlined" size="small" onClick={handletoggleCategory}>Categorias<AiOutlineDown /></Button>
            </div>
            

           {toggleCategory ? 
            <NavbarUlCategory >
                <AiFillCloseCircle className="navbarCategoryClose" onClick={handletoggleCategory}/>
                {categoriasUnicas.map((categoria) => (
            <NavbarLi key={categoria}>{categoria}</NavbarLi>
          ))}
            </NavbarUlCategory> : <></>}
            
        </NavbarCategoryHeader>
    )
}
export default NavbarCategory