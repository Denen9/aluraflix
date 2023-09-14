import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import materias from './data';
import Footer from './components/Footer/Footer';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import MyVideoList from './pages/MyVideoList/MyVideoList';

const obtenerCategoriasUnicas = (materias) => {
  return Array.from(new Set(materias.map((materia) => materia.categoria)));
};

function App() {
  const [myList, setMyList] = useState([]);

  const categoriasUnicas = obtenerCategoriasUnicas(materias);


  const addToMyList = (video) => {
    setMyList([...myList, video]);
  };

  const removeFromMyList = (videoToRemove) => {
    setMyList(myList.filter((video) => video.id !== videoToRemove.id));
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header
          materias={materias}
          categoriasUnicas={categoriasUnicas}
        />
        <Routes>
          <Route path="/" element={<Home materias={materias} categoriasUnicas={categoriasUnicas} />} />
          <Route path="/videos/:videoId" element={<VideoDetail materias={materias} addToMyList={addToMyList} />} />
          <Route path="/cuenta/mis-videos" element={<MyVideoList myList={myList} removeFromMyList={removeFromMyList}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
