import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardBox = styled.div`
  width: 97%;
  height: 120px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 1.2rem;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    height: 200px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Card = ({ materia, onClick }) => {

  return (
    <Link to={`/videos/${materia.id}`} >
      <CardBox>
        <CardImg src={materia.image} alt={materia.nombre} />
      </CardBox>
    </Link>
  );
};

export default Card;
