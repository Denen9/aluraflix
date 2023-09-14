import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import imagen from "../../assets/images/b3ce5648918e1ff1ad923038cfe92914.jpg";
import imagen2 from "../../assets/images/pexels-thisisengineering-3861969.jpg";
import MySwiperComponent from "../Swiper/Swiper";

const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 2rem;



  @media screen and (min-width: 768px){
    margin-top:6rem;
    width: 100%;
  }
  `;

const HeroImgBox = styled.div`
  flex-direction: column;
  display: flex;
  @media screen and (min-width: 768px){
  width: 800px;

}
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 600px;
  z-index: -1;
  filter: brightness(0.3);
  margin: 0 auto;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const HeroImgTwo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 600px;
  z-index: -1;
  filter: brightness(0.3);
  margin: 0 auto;
  display:none;

  @media screen and (min-width: 768px){
    display: block;
  }
`;

const HeroContainerTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  display: none;

  @media screen and (min-width: 768px){
    display: block;
  }
`





const Hero = ({ materias }) => {
  return (
    <HeroContainer>
      <HeroImgBox className="HeroImgBox">
        <HeroImg src={imagen} alt="imagen" />
        <HeroImgTwo src={imagen2} alt="imagen" />
        <MySwiperComponent />
      </HeroImgBox>
    </HeroContainer>
  );
};

export default Hero;
