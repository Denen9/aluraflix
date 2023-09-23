import React from 'react';
import styled from 'styled-components';

const AyudaSectionWrapper = styled.section`
  /* Estilos para el contenedor principal */
  padding: 4rem 2rem;
  @media screen and (min-width: 768px){
    padding: 10rem 6rem 4rem 6rem;

  }
`;

const Title = styled.h2`
  /* Estilos para el título principal */
    font-size: 2rem;
    color: #d1d1d1;
    margin-bottom: 20px;
`;

const SubTitle = styled.h3`
    font-size: 1.2rem;
    color: #d1d1d1;
    margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    color: #b8b8b8;
    font-weight: 200;
    margin-bottom: 2rem;
    line-height: 150%;
`;

const List = styled.ul`
    list-style: none;
    margin-left: 20px;
    color: "#d1d1d1";
    margin-bottom: 2rem;
`;

const ListItem = styled.li`
    font-size: 1rem;
    color: #b8b8b8;
    font-weight: 200;
    margin-bottom: 1rem;
    line-height: 150%;
`;

function Help() {
  return (
    <AyudaSectionWrapper>
      <Title>Bienvenido a Aluraflix: Tu Puerta de Entrada al Mundo de la Programación</Title>
      <Paragraph>
        En Aluraflix, creemos en el poder de la educación en línea para capacitar a individuos de todos los niveles de experiencia en el emocionante mundo de la programación. Ya sea que seas un principiante absoluto o un profesional que busca perfeccionar sus habilidades, nuestra plataforma ofrece una amplia gama de cursos de programación diseñados para ayudarte a alcanzar tus objetivos.
      </Paragraph>

      <SubTitle>¿Por qué Elegir Aluraflix?</SubTitle>
      <List>
        <ListItem>Variedad de Cursos: Nuestra plataforma alberga una colección diversa de cursos que abarcan desde las bases de la programación hasta temas avanzados. Puedes elegir el curso que mejor se adapte a tus necesidades y metas.</ListItem>
        <ListItem>Aprendizaje a Tu Ritmo: En Aluraflix, no hay prisa. Aprende a tu propio ritmo, accediendo a las lecciones cuando y donde quieras. No hay fechas límite ni presión para avanzar rápidamente.</ListItem>
        <ListItem>Instructores Expertos: Trabajamos con instructores altamente calificados y con experiencia en la industria. Aprenderás de expertos que conocen los entresijos de la programación y pueden guiarte de manera efectiva.</ListItem>
        <ListItem>Comunidad de Aprendizaje: Únete a una comunidad activa de estudiantes y profesionales de la programación. Colabora, comparte ideas y resuelve problemas juntos para enriquecer tu experiencia de aprendizaje.</ListItem>
        <ListItem>Certificaciones: Obtén certificados reconocidos por la industria al completar nuestros cursos, lo que te ayudará a destacarte en tu búsqueda de empleo o avance profesional.</ListItem>
      </List>

      <SubTitle>¿Qué Puedes Esperar Aprender?</SubTitle>
      <Paragraph>
        Nuestros cursos cubren una amplia gama de lenguajes de programación, tecnologías y conceptos. Desde el desarrollo web hasta la ciencia de datos, desde la programación móvil hasta la inteligencia artificial, tenemos algo para todos. Ya sea que desees crear sitios web impresionantes, aplicaciones móviles innovadoras o explorar las posibilidades de la inteligencia artificial, Aluraflix te brinda las herramientas y el conocimiento para hacerlo posible.
      </Paragraph>

      <SubTitle>Comienza Tu Viaje de Aprendizaje Hoy</SubTitle>
      <Paragraph>
        No importa si estás interesado en cambiar de carrera, mejorar tus habilidades actuales o simplemente explorar el fascinante mundo de la programación, Aluraflix está aquí para ti. Comienza tu viaje de aprendizaje hoy mismo y descubre todo lo que la programación en línea puede ofrecer.
      </Paragraph>

      <Paragraph>Únete a Aluraflix y comienza a convertir tus sueños de programación en realidad. ¡Bienvenido al emocionante mundo de la programación en línea!</Paragraph>
    </AyudaSectionWrapper>
  );
}

export default Help;