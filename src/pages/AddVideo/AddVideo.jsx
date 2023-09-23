import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';


import styled from 'styled-components';

const PageWrapper = styled.div`
  text-align: center;
  padding: 20px;
  color: #fff;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  margin: 10px;
  color: red;
  & .MuiInputLabel-root {
    color: white; /* Cambia el color del label a blanco */
  }

  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: blue; /* Cambia el color del outline (borde exterior) a azul */
  }

  /* Cambia el color del outline cuando está enfocado */
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: green; /* Cambia el color del outline cuando está enfocado a verde */
  }

`;

const AddVideo = ({ materias }) => {
  const [videoData, setVideoData] = useState({
    categoria: '',
    nombre: '',
    duration: '',
    year: '',
    quality: '',
    info: '',
    image: '',
    url: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = () => {
    
  };

  return (
    <PageWrapper>
        <h1>Agregar Video</h1>
        <Box>
        <FormWrapper>
        <StyledTextField
          name="categoria"
          label="Categoría"
          variant="filled"
          margin="normal"
          value={videoData.categoria}
          onChange={handleInputChange}
          focused
        />
        <StyledTextField
          name="nombre"
          label="Nombre del Video"
          variant="filled"
          margin="normal"
          value={videoData.nombre}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="duration"
          label="Duración"
          variant="standard"
          margin="normal"
          color="secondary"
          value={videoData.duration}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="year"
          label="Año"
          variant="standard"
          margin="normal"
          value={videoData.year}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="quality"
          label="Calidad"
          variant="standard"
          margin="normal"
          value={videoData.quality}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="info"
          label="Información"
          variant="standard"
          margin="normal"
          multiline
          rows={4}
          value={videoData.info}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="image"
          label="URL de la Imagen"
          variant="standard"
          margin="normal"
          value={videoData.image}
          onChange={handleInputChange}
        />
        <StyledTextField
          name="url"
          label="URL del Video (embed)"
          variant="standard"
          margin="normal"
          value={videoData.url}
          onChange={handleInputChange}
        />
        <button variant="contained" color="primary" onClick={handleSubmit}>
          Agregar Video
        </button>
      </FormWrapper>
        </Box>
    </PageWrapper>
  );
};

export default AddVideo;