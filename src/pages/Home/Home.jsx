import React from "react";
import Hero from "../../components/Hero/Hero";
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import materias from "../../data";
import styled from "styled-components";

const VideosContainer = styled.div`
  margin: 0 auto 4rem auto;
  @media screen and (min-width: 768px){
    margin-top: 4rem;
  }
`


const Home = ({categoriasUnicas}) => {

  return (
    <div>
      <Hero materias={materias} />
      <VideosContainer>
      {categoriasUnicas.map((categoria) => (
        <SectionSlider
          key={categoria}
          categoria={categoria}
          materias={materias.filter((materia) => materia.categoria === categoria)}
        />
      ))}
      </VideosContainer>
      
    </div>
  );
};

export default Home;
