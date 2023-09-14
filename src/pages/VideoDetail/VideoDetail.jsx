import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlinePlus, AiOutlineCheck} from "react-icons/ai"
import { Button } from '@mui/material';
import VideosSimilares from './VideosSimilares';

const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;
const IframeContainer = styled.div`
    padding: 2rem 0 1rem 0;

`

const VideoTitleBox = styled.div`
    display: flex;
    padding: 1rem 1rem; 
    align-items: center;
`;

const VideoTitle = styled.div`
    font-size: 1.2rem;
    color: #fff;
`;

const VideoDescriptionBox = styled.div`
`
const VideoDescription = styled.p`
    font-size: 0.9rem;
    color: #b8b8b8;
    font-weight: 200;
    padding: 0 1rem 1rem 1rem;
    line-height: 150%;
`;


const Iframe = styled.iframe`
    width: 100%;
    height: 250px;
    box-shadow: 0 0 30px blue;
`

const AddedBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
    margin: 0 1rem;
    gap: 1rem;
`

const Details = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: #747474;
    margin: 0 1rem 1rem 1rem;;
`

const VideoDetail = ({ materias, addToMyList }) => {
  const { videoId } = useParams();
  const [addedToList, setAddedToList] = useState(false);

  useEffect(() => {
    setAddedToList(false);
  }, [videoId]);

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
        <Details>
            <span>{video.duration}</span>
            <span>{video.year}</span>
            <span>{video.categoria}</span>
            <span>{video.quality}</span>
        </Details>
        <VideoTitleBox>
            <VideoTitle>{video.nombre}</VideoTitle>
        </VideoTitleBox>
        <VideoDescriptionBox>
            <VideoDescription>{video.info}</VideoDescription>
        </VideoDescriptionBox>
        <AddedBox>
            {!addedToList && (
                <AiOutlinePlus onClick={handleAddToList}></AiOutlinePlus>
            )}
            {addedToList && <AiOutlineCheck></AiOutlineCheck>}
        <Link to="/cuenta/mis-videos"><Button variant="outlined" size="small">VER LISTA</Button></Link>
        </AddedBox>    
        <VideosSimilares materias={materias} video={video}/>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
