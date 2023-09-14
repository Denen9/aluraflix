import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardBox = styled.div`
  width: 97%;
  height: 130px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 1.2rem;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    height: 150px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Card = ({ materia, v }) => {

  return (
    <Link to={`/videos/${materia.id}`} >
      <CardBox>
        <CardImg src={materia.image || v.image} alt={materia.nombre || v.nombre} />
      </CardBox>
    </Link>
  );
};

export default Card;
