import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlinePlus, AiOutlineCheck} from "react-icons/ai"
import { Button } from '@mui/material';

const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;

const VideoTitle = styled.div`
    display: flex;
    padding: 1rem 1rem; 
    align-items: center;
`;
const VideoDescriptionBox = styled.div`

`
const VideoDescription = styled.p`
    font-size: 0.9rem;
    color: #b8b8b8;
    font-weight: 200;
    padding: 0 1rem;
    line-height: 150%;
`;


const IframeContainer = styled.div`
    padding: 2rem 0;

`
const Iframe = styled.iframe`
    width: 100%;
    height: 250px;
    box-shadow: 0 0 30px blue;
`

const AddedBox = styled.div`
    font-size: 1.5rem;
    color: #fff;
    margin-right: 1rem;
`

const VideoDetail = ({ materias, addToMyList }) => {
  const { videoId } = useParams();
  const [addedToList, setAddedToList] = useState(false);

  const video = materias.find((materia) => materia.id === parseInt(videoId));

  const handleAddToList = () => {
    addToMyList(video);
    setAddedToList(true);
  };

  return (
    <VideoDetailContainer>
        <IframeContainer>
            <Iframe
            src={video.url}
            title={video.nombre}
            frameBorder="0"
            allowFullScreen
        ></Iframe>
        </IframeContainer>
        <VideoTitle>
            <h4>{materias.nombre}</h4>
            <AddedBox>
            {!addedToList && (
                <AiOutlinePlus onClick={handleAddToList}></AiOutlinePlus>
            )}
            {addedToList && <AiOutlineCheck></AiOutlineCheck>}
            </AddedBox>
            <Button variant="outlined" size="small">VER LISTA</Button>
        </VideoTitle>
       
        <VideoDescriptionBox>
            <VideoDescription>{video.info}</VideoDescription>
        </VideoDescriptionBox>
        
      
      
    </VideoDetailContainer>
  );
};

export default VideoDetail;
