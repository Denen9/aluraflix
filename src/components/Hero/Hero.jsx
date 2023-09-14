import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import imagen from "../../assets/images/b3ce5648918e1ff1ad923038cfe92914.jpg";
import video2 from "../../assets/images/pexels-cottonbro-5473969 (2160p).mp4"
import video1 from "../../assets/images/pexels-mikhail-nilov-7534239.webm";
import MySwiperComponent from "../Swiper/Swiper";

const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0 2rem;


  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:6rem;
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 2rem;

  }
  `;

const HeroImgBox = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 4rem;
  @media screen and (min-width: 768px){
  width: 350px;
  margin-top: 2rem;

}
`;

const HeroImg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 800px;
  z-index: -1;
  filter: brightness(0.2);
  margin: 0 auto;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const HeroImgTwo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 600px;
  z-index: -1;
  filter: brightness(0.2);
  margin: 0 auto;
  display:none;

  @media screen and (min-width: 768px){
    display: block; 
  }
`;

const HeroInfoBox = styled.div`
  display: none;
  flex-direction: column;
  width: 400px;
  @media screen and (min-width: 768px){
    display: flex;
  }
`

const HeroContainerTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  display: none;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px){
    display: block;
  }
`

const HeroText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #aaaaaa;
  line-height: 150%;
`

const Hero = ({ materias }) => {
  return (
    <HeroContainer>
      <HeroInfoBox>
        <HeroContainerTitle>Aprende a Programar desde la comodidad</HeroContainerTitle>
        <HeroText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates illum quasi impedit magni, ut dolorum illo dolor aut ratione esse, atque molestias nostrum dicta id, eaque quas labore. Minima!</HeroText>
      </HeroInfoBox>
      <HeroImgBox className="HeroImgBox">
        <HeroImg src={video2} alt="imagen" autoPlay loop/>
        <HeroImgTwo src={video1} alt="imagen" autoPlay loop/>
        <MySwiperComponent />
      </HeroImgBox>
    </HeroContainer>
  );
};

export default Hero;
