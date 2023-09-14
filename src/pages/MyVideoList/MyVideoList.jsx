import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyVideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const VideoItem = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoThumbnail = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer; 
`;

const VideoTitle = styled.h3`
  font-size: 20px;
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

const MyVideoList = ({ myList, removeFromMyList }) => {
  const handleRemoveFromList = (video) => {
    removeFromMyList(video);
  };

  return (
    <MyVideoListContainer>
      <h2>Mis Videos</h2>
      {myList.map((video) => (
        <VideoItem key={video.id}>
          <Link to={`/videos/${video.id}`}>
            <VideoThumbnail src={video.image} alt={video.nombre} />
          </Link>
          <VideoTitle>{video.nombre}</VideoTitle>
          <RemoveButton onClick={() => handleRemoveFromList(video)}>Eliminar</RemoveButton>
        </VideoItem>
      ))}
    </MyVideoListContainer>
  );
};

export default MyVideoList;
