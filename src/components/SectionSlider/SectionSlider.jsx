import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../components/Card/Card";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';


const SectionSliderContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #00040f;
  padding-top: 2rem;
`;

const SectionSliderTitle = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
  margin-left: 1rem;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
`;

const SectionSubtitles = styled.p`
  font-size: 0.72rem;
  margin-bottom: 0.5rem;
  font-weight: 100;
  margin-left: 1rem;
  color: #858585;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin: 0 auto;
`;


const SectionSlider = ({ categoria, materias }) => {
  return (
    <SectionSliderContainer>
      <SectionSliderTitle>{categoria}</SectionSliderTitle>
      <SectionSubtitles>
        {Array.from(new Set(materias.map((materia) => materia.subtitulo))).map((subtitulo, index) => (
          <span key={index}>{subtitulo}</span>
        ))}
      </SectionSubtitles>
      <StyledSwiper
        slidesPerView={2}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3, // Para pantallas con ancho de al menos 576px, muestra 2 slides
          },
          768: {
            slidesPerView: 4, // Para pantallas con ancho de al menos 768px, muestra 3 slides
          },
          992: {
            slidesPerView: 5, // Para pantallas con ancho de al menos 992px, muestra 4 slides
          },
          1200: {
            slidesPerView: 6, // Para pantallas con ancho de al menos 1200px, muestra 5 slides
          },
        }}
      >
        {materias.map((materia) => (
          <SwiperSlide key={materia.id}>
            <Card materia={materia} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SectionSliderContainer>
  );
};

export default SectionSlider;
