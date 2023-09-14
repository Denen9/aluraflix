import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../components/Card/Card';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SimilarVideosContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #00040f;
  padding-top: 3rem;
`;

const SimilarVideosTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-left: 1rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
`;

const SimilarVideosSubtitles = styled.p`
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

const VideosSimilares = ({ materias, video }) => {

    const videosSimilares = materias.filter((materia) => materia.categoria === video.categoria);

    
  return (
    <SimilarVideosContainer>
      <SimilarVideosTitle>Mas contenido como este</SimilarVideosTitle>
      <SimilarVideosSubtitles>
      </SimilarVideosSubtitles>
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
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {videosSimilares.map((materia) => (
          <SwiperSlide key={materia.id}>
            <Card materia={materia} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SimilarVideosContainer>
  );
};

export default VideosSimilares;
