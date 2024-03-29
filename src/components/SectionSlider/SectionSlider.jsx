import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../components/Card/Card";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



const SectionSliderContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #00040f;
  padding-top: 3rem;
`;

const SectionSliderTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-left: 1rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
`;

const SectionSubtitles = styled.p`
  font-size: 0.85rem;
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
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3, 
          },
          768: {
            slidesPerView: 4, 
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 5, 
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
