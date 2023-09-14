import CSS1 from "./assets/images/CSS/CSS-dalto.jpg"
import CSS2 from "./assets/images/CSS/CSS-flexbox.jpg"
import CSS3 from "./assets/images/CSS/CSS-flexbox2.jpg"
import CSS4 from "./assets/images/CSS/display-block-CSS.png"
import CSS5 from "./assets/images/CSS/CSS-Midudev.jpg"
import CSS6 from "./assets/images/CSS/CSS-Tailwind.jpg"
import react1 from "./assets/images/react/react-harland.jpg"
import react2 from "./assets/images/react/reactjs.jpg"
import react3 from "./assets/images/react/react-Midudev.jpg"
import react4 from "./assets/images/react/react-freecode-camp.jpg"
import react5 from "./assets/images/react/react-en-60.jpg"
import react6 from "./assets/images/react/react-em.jpg"
import react7 from "./assets/images/react/urilT_kY_-U_320x180.jpg"
import react8 from "./assets/images/react/pFyAu4R684s_1280x720.jpg"
import js1 from "./assets/images/javascript/FEdqGdtZuwc_320x180.jpg"
import js2 from "./assets/images/javascript/FOA9brQ3oxY_1280x720.jpg"
import js3 from "./assets/images/javascript/fullstack.png"
import js4 from "./assets/images/javascript/ivdTnPl1ND0_640x480.jpg"
import js5 from "./assets/images/javascript/jr_98HCSTZc_320x180.jpg"
import js6 from "./assets/images/javascript/z95mZVUcJ-E_1280x720.jpg"
import js8 from "./assets/images/javascript/6cnFl9aHD5Y_1280x720.jpg"
import js9 from "./assets/images/javascript/N8Xt5rP_DUo_1280x720.jpg"
import py1 from "./assets/images/python/nKPbfIU442g_1280x720.jpg"
import py2 from "./assets/images/python/HtKqSJX7VoM_1280x720.jpg"
import py3 from "./assets/images/python/Kp4Mvapo5kc_1280x720.jpg"
import py4 from "./assets/images/python/tQZy0U8s9LY_1280x720.jpg"
import py5 from "./assets/images/python/tWnyBD2src0_1280x720.jpg"
import py6 from "./assets/images/python/Osd9KOu4b7s_1280x720.jpg"
import py7 from "./assets/images/python/BxcMMgmLKTU_320x180.jpg"




const materias = [
  {
    id: 1001,
    categoria: "CSS",
    nombre: "Curso de CSS by SoyDalto",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    subtitulo: "¡Aprende CSS con los instructores que más te gusten!",
    info: "Este curso completo de CSS desde cero te permitirá adquirir las habilidades necesarias para diseñar y dar estilo a tus sitios web con CSS. ¡Inscríbete y desarrolla tus habilidades de diseño web!",
    url: "https://www.youtube.com/embed/OWKXEJN67FE",
    image: CSS1,
  },
  {
    id: 1002,
    categoria: "CSS",
    nombre: "Consejos Flexbox",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "En este recurso, obtendrás valiosos consejos sobre cómo utilizar flexbox y aprovechar al máximo sus utilidades en tus proyectos de diseño web. Mejora tus habilidades de diseño responsive.",
    url: "https://www.youtube.com/embed/EB4vWLzfVcI",
    image: CSS2,
  },
  {
    id: 1003,
    categoria: "CSS",
    nombre: "FlexboxFroggy",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende de manera interactiva y divertida a usar flexbox con el juego FlexboxFroggy. Este recurso te ayudará a dominar los conceptos esenciales de flexbox mientras resuelves desafíos.",
    image: CSS3,
    url: "https://www.youtube.com/embed/MXPhyN5t0uQ",
  },
  {
    id: 1004,
    categoria: "CSS",
    nombre: "Cómo utilizar la propiedad display",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Descubre cuándo y cómo utilizar la propiedad CSS 'display' en tus diseños web. Este recurso te ayudará a comprender y aplicar esta propiedad de manera efectiva.",
    image: CSS4,
    url: "https://youtube.com/embed/AG2QssLpQzI",
  },
  {
    id: 1005,
    categoria: "CSS",
    nombre: "Cómo utilizar Tailwind by Midudev",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende a utilizar el popular framework de CSS, Tailwind CSS, en tus proyectos web. Este curso te guiará a través de la implementación de Tailwind para simplificar tu flujo de trabajo de diseño.",
    image: CSS5,
    url: "https://youtube.com/embed/h5HQVHTpeHs",
  },
  {
    id: 1006,
    categoria: "CSS",
    nombre: "Cómo utilizar Tailwind",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Descubre cómo aplicar Tailwind CSS a tus proyectos web y simplifica tu flujo de trabajo de diseño. Este recurso te ayudará a optimizar tus habilidades de diseño con Tailwind.",
    image: CSS6,
    url: "https://youtube.com/embed/VcIQviqWDRs",
  },
  {
    id: 1007,
    categoria: "React",
    nombre: "React por Alura",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Descubre React, la librería más utilizada para crear interfaces de usuario en aplicaciones web. Este curso de Alura te proporcionará una introducción completa a React.",
    image: react1,
    url: "https://youtube.com/embed/MnBNPA45NW8",
  },
  {
    id: 1008,
    categoria: "React",
    nombre: "Aprendiendo ReactJS desde cero by Sergie",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Domina React para crear aplicaciones web sofisticadas desde cero. Este curso te guiará a través de los fundamentos y prácticas avanzadas de React.",
    image: react2,
    url: "https://youtube.com/embed/ladwC6Lrs-M",
  },
  {
    id: 1009,
    categoria: "React",
    nombre: "ReactJS by Midudev",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Realiza un profundo aprendizaje de React con este extenso curso ofrecido por Midudev. Explora todos los aspectos de esta tecnología en detalle.",
    image: react3,
    url: "https://youtube.com/embed/qkzcjwnueLA",
  },
  {
    id: 1010,
    categoria: "React",
    nombre: "ReactJS by freecodecamp",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Profundiza en React a través de los cursos de freecodecamp. Este recurso te proporcionará una amplia base de conocimientos sobre React.",
    image: react4,
    url: "https://youtube.com/embed/6Jfk8ic3KVk",
  },
  {
    id: 1011,
    categoria: "React",
    nombre: "React en 45 minutos",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende lo esencial de React en tan solo una hora. Este curso te proporciona una introducción rápida y efectiva a React.",
    image: react5,
    url: "https://youtube.com/embed/PWF5SgnNdp4",
  },
  {
    id: 1012,
    categoria: "React",
    nombre: "EDteam - Curso React desde cero",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende los conceptos fundamentales de React con los cursos de EdTeam. Este recurso te proporcionará una introducción completa a React.",
    image: react7,
    url: "https://youtube.com/embed/urilT_kY_-U"
  },
  {
    id: 1013,
    categoria: "React",
    nombre: "¿Qué es React? por EdTeam",
    subtitulo: "¡Nuevos videos agregados!",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende los conceptos fundamentales de React con los cursos de EdTeam. Este recurso te proporcionará una introducción completa a React.",
    image: react6,
    url: "https://youtube.com/embed/kEMr0rFjB7E",
  },
  {
    id: 1014,
    categoria: "React",
    nombre: "React desde cero By MoureDev",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Crea tu primera pagina web desde cero en 10 minutos aprendiendo los conceptos basicos de esta libreria para encaminarte en el desarrollo de aplicaciones web!",
    image: react8,
    url: "https://youtube.com/embed/pFyAu4R684s",
  },
  {
    id: 1016,
    categoria: "JavaScript",
    nombre: "Bucles y Bucles anidados en JS",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "En este curso, aprenderás a trabajar con bucles y bucles anidados en JavaScript para controlar la repetición de tareas y manipular estructuras de datos complejas. Dominarás las técnicas de iteración esenciales para la programación en JavaScript, lo que te permitirá escribir código más eficiente y efectivo.",
    image: js1,
    url: "https://youtube.com/embed/FEdqGdtZuwc"
  },
  {
    id: 1017,
    categoria: "JavaScript",
    nombre: "Aprende JS by Programador X",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Este completo curso de JavaScript, impartido por el Programador X, te llevará desde los conceptos básicos hasta niveles avanzados del lenguaje. A lo largo del curso, construirás proyectos prácticos que te ayudarán a aplicar tus conocimientos en el mundo real.",
    image: js2,
    url: "https://youtube.com/embed/8GTaO9XhA5M"
  },
  {
    id: 1018,
    categoria: "JavaScript",
    nombre: "Fullstack",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Explora el emocionante mundo del desarrollo Fullstack en JavaScript. Desde el frontend hasta el backend y las bases de datos, este curso te proporcionará las habilidades necesarias para construir aplicaciones web completas y dinámicas.",
    image: js3,
    url: "https://youtube.com/embed/eejIHbOk_uI"
  },
  {
    id: 1019,
    categoria: "JavaScript",
    nombre: "JavaScript desde cero by FreeCodeCamp",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Si eres un principiante absoluto en JavaScript, este curso es perfecto para ti. Aprenderás los conceptos fundamentales de programación en JavaScript y obtendrás una base sólida para construir tus habilidades de desarrollo web.",
    image: js4,
    url: "https://youtube.com/embed/ivdTnPl1ND0"
  },
  {
    id: 1020,
    categoria: "JavaScript",
    nombre: "Descubre el poder del CRUD",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "El CRUD (Crear, Leer, Actualizar, Borrar) es fundamental en el desarrollo de aplicaciones web. En este curso, aprenderás cómo implementar estas operaciones en aplicaciones JavaScript, lo que te permitirá interactuar con bases de datos y gestionar la información de manera eficiente.",
    image: js5,
    url: "https://youtube.com/embed/jr_98HCSTZc"
  },
  {
    id: 1021,
    categoria: "JavaScript",
    nombre: "JavaScript desde cero by SoyDalto",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "SoyDalto te guiará a través de los fundamentos de JavaScript, desde la manipulación de variables hasta el uso de funciones avanzadas. Este curso es ideal para aquellos que desean una introducción completa a este lenguaje de programación versátil.",
    image: js6,
    url: "https://youtube.com/embed/z95mZVUcJ-E"
  },
  {
    id: 1022,
    categoria: "JavaScript",
    nombre: "Primeros pasos en JS by MoureDev",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "MoureDev te enseñará los conceptos iniciales de JavaScript, incluyendo variables, condicionales y bucles. Este curso es perfecto para principiantes que desean adentrarse en el mundo de la programación en JavaScript.",
    image: js8,
    url: "https://youtube.com/embed/6cnFl9aHD5Y"
  },
  {
    id: 1023,
    categoria: "JavaScript",
    nombre: "JavaScript desde cero by Sergie",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "En este curso completo de JavaScript, Sergie te llevará desde los fundamentos hasta temas más avanzados. Aprenderás a construir aplicaciones web dinámicas y atractivas utilizando este lenguaje de programación ampliamente utilizado.",
    image: js9,
    url: "https://youtube.com/embed/N8Xt5rP_DUo"
  },
  {
    id: 1024,
    categoria: "Python",
    nombre: "Python desde cero by SoyDalto",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "SoyDalto te guiará a través de los conceptos fundamentales de Python, desde la sintaxis hasta la creación de programas completos. Este curso es ideal tanto para principiantes como para aquellos que desean fortalecer sus habilidades en Python.",
    image: py1,
    url: "https://youtube.com/embed/nKPbfIU442g"
  },
  {
    id: 1025,
    categoria: "Python",
    nombre: "Curso de POO con Python by SoyDalto",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Aprende la programación orientada a objetos (POO) en Python con este curso práctico de SoyDalto. Descubre cómo crear clases, objetos y aplicaciones basadas en POO en Python.",
    image: py2,
    url: "https://youtube.com/embed/HtKqSJX7VoM"
  },
  {
    id: 1026,
    categoria: "Python",
    nombre: "Curso de Python desde cero by MoureDev",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "MoureDev te llevará a través de los conceptos básicos de Python en este curso introductorio. Desde variables hasta estructuras de control, obtendrás una sólida base en Python.",
    image: py3,
    url: "https://youtube.com/embed/Kp4Mvapo5kc"
  },
  {
    id: 1027,
    categoria: "Python",
    nombre: "Curso de Python by HolaMundo",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "¡Aprende Python con HolaMundo! Este curso te guiará a través de la creación de programas en Python, desde simples scripts hasta aplicaciones más complejas.",
    image: py4,
    url: "https://youtube.com/embed/tQZy0U8s9LY"
  },
  {
    id: 1028,
    categoria: "Python",
    nombre: "Python desde cero by FreeCodeCamp",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "FreeCodeCamp te ofrece una introducción completa a Python. Aprende a programar en Python y adquiere las habilidades necesarias para crear aplicaciones web, análisis de datos y más.",
    image: py5,
    url: "https://youtube.com/embed/tWnyBD2src0"
  },
  {
    id: 1029,
    categoria: "Python",
    subtitulo: "¡Sección recomendada!",
    nombre: "Aprendiendo Python",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Esta sección recomendada te ayudará a aprender Python de manera efectiva. Descubre los conceptos clave y practica tus habilidades de programación en este emocionante viaje de aprendizaje.",
    image: py6,
    url: "https://youtube.com/embed/Osd9KOu4b7s"
  },
  {
    id: 1030,
    categoria: "Python",
    subtitulo: "¡Sección recomendada!",
    nombre: "Descubre el poder de Python",
    duration: "1H47M",
    year: "2022",
    quality: "HD",
    info: "Explora el increíble potencial de Python en esta sección recomendada. Desde desarrollo web hasta automatización y análisis de datos, Python puede hacerlo todo.",
    image: py7,
    url: "https://youtube.com/embed/BxcMMgmLKTU"
  }


  
  // Continúa con los cursos adicionales si los hubiera
  ];
export default materias;

