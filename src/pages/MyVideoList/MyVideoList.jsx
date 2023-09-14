import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi'

const MyVideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 2rem 1rem 4rem 1rem;
  
`;

const VideoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  padding: 0 1rem;
`;

const VideoThumbnail = styled.img`
  width: 100px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer; 
`;

const VideoTitle = styled.h3`
  font-size: 0.85rem;
  letter-spacing: 1px;
`;

const DescriptionListBox = styled.span`
  width: 100%;
  justify-content: space-between;
  display: flex;
  font-size: 1rem;
  color: #d8d8d8;
`

const IconBox = styled.span`
  display: flex;
  font-size: 1.3rem;
  cursor: pointer;
  gap: 1rem;
`


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
          <DescriptionListBox>
            <VideoTitle>
              <span>{video.nombre}</span>
              <span></span>
              </VideoTitle>
            <IconBox>
              <FiPlay/>
              <AiFillDelete onClick={() => handleRemoveFromList(video)}/>
            </IconBox>
          </DescriptionListBox>
        </VideoItem>
      ))}
    </MyVideoListContainer>
  );
};

export default MyVideoList;
