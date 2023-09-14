import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import python from "../../assets/images/wp7685924.webp"
import java from "../../assets/images/0d147c411a8ce284e733b4db4294712a.jpg"
import reactNative from "../../assets/images/M0rP6h.webp"
import js from "../../assets/images/JavaScript un lenguaje de programación.webp"
import reactjs from "../../assets/images/photo-1633356122544-f134324a6cee.jpg"


// Define tus estilos utilizando styled-components
const StyledSwiperContainer = styled.div`
  /* Agrega tus estilos personalizados aquí */
  .swiper-container {
    width: 100%;
    height: 500px; /* Ajusta la altura según tus necesidades */
    
  }

  .swiper-slide {
    background-color: #fff; /* Color de fondo de las diapositivas */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;
    font-size: 24px; /* Tamaño de fuente de contenido en las diapositivas */
    color: #333;
    margin: 2rem 0;
    @media screen and (min-width: 768px){
      height: 400px;
    }
  }
`;

const SwiperImg = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border: 2px solid #00BDEC;
    @media screen and (min-width: 768px){
      height: 400px;
    }
`

const Title = styled.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  width: 99%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.829);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 18px;
`;

export default function MySwiperComponent() {
    return (
      <StyledSwiperContainer>
        <Swiper
          grabCursor={true}
          loop={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 75, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperImg src={python}></SwiperImg>
            <Title>Python</Title>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImg src={java}></SwiperImg>
            <Title>Java</Title>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImg src={js}></SwiperImg>
            <Title>JavaScript</Title>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImg src={reactNative}></SwiperImg>
            <Title>React Native</Title>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperImg src={reactjs}></SwiperImg>
            <Title>ReactJS</Title>
          </SwiperSlide>
        </Swiper>
      </StyledSwiperContainer>
    );
  }