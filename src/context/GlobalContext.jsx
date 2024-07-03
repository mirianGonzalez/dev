import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //referencia al video y formulario editar
  const videoRef = useRef(null)
  const formRef = useRef(null)

  // abrir y cerrar modal
  const [abrirModal, setAbrirModal] = useState(false);

  //url de api de videos
  const urlApi = "https://667b48d9bd627f0dcc9230d9.mockapi.io/videos/";

  //arreglo de videos api
  const [videos, setVideos] = useState([]);

  //actualizador de los videos al editar alguno
  const [actualizadorVideos, setActualizadorVideos] = useState(false)

  // lista categorias
  const categorias = [
    {
      titulo: "Frontend",
      color: "#6BD1FF",
    },
    {
      titulo: "Backend",
      color: "#00C86F",
    },
    {
      titulo: "Innovación y gestión",
      color: "#FFBA05",
    },
  ];

  //llamada a la api

  useEffect(() => {
    const getVideos = async () => {
      try {
        const respuesta = await fetch(urlApi);
        const videos = await respuesta.json();
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, [actualizadorVideos]); //ejecutar al inicio y al editarse un video

  //Video seleccionado
  const [videoSeleccionado, setVideoSeleccionado] = useState({
    id: "1",
    titulo: "Conoce el canal de Alura Latam",
    descripcion:
      "Les damos la bienvenida al canal de Alura Latam. Aquí encontrarás contenido de diversos temas relacionados con la tecnología como programación, ciencia de datos y más.",
    imagen_url: "https://i.ytimg.com/vi/1iJ5lof5kLM/maxresdefault.jpg",
    video_url: "https://www.youtube.com/embed/1iJ5lof5kLM",
    categoria: "Introducción",
    color: "#121212",
  });

  return (
    <GlobalContext.Provider
      value={{
        abrirModal,
        setAbrirModal,
        videos,
        setVideos,
        videoSeleccionado,
        setVideoSeleccionado,
        urlApi,
        actualizadorVideos,
        setActualizadorVideos,
        videoRef, 
        formRef,
        categorias
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
