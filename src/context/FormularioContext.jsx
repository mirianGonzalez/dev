import React, { useContext, useState } from "react";
import { createContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

export const FormularioContext = createContext();

const FormularioContextProvider = ({ children }) => {
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [categoria, actualizarCategoria] = useState("");
  const [idParaEditar, setIdParaEditar] = useState("");

  const {
    urlApi,
    videos,
    setVideos,
    setAbrirModal,
    actualizadorVideos,
    setActualizadorVideos,
  } = useContext(GlobalContext);

  //navegar a home al subir nuevo video
  const navegarAHome = useNavigate()


  //recibir datos de video nuevo y enviarlo
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio");
    let nuevoVideo = {
      titulo,
      imagen_url: imagen,
      video_url: video,
      descripcion,
      categoria,
    };
    console.log(nuevoVideo);
    enviarVideo(urlApi, nuevoVideo);
  };

  //enviar video nuevo a api
  async function enviarVideo(urlApi, videoASubir) {
    try {
      const conexion = await fetch(urlApi, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(videoASubir),
      });

      if (!conexion.ok) {
        throw new Error(
          "Ha ocurrido un error al enviar los datos del producto"
        );
      }
      const nuevoVideo = await conexion.json();
      console.log(nuevoVideo);
      setVideos([...videos, nuevoVideo]);
      alLimpiar();
      navegarAHome("/")

      return nuevoVideo;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return null;
    }
  }

  //manejar reset
  const alLimpiar = () => {
    actualizarTitulo("");
    actualizarDescripcion("");
    actualizarCategoria("");
    actualizarImagen("");
    actualizarVideo("");
  };

  //poner datos a editar en formulario

  const videoAEditar = (video) => {
    actualizarTitulo(video.titulo);
    actualizarDescripcion(video.descripcion);
    actualizarCategoria(video.categoria);
    actualizarImagen(video.imagen_url);
    actualizarVideo(video.video_url);
  };

  //enviar video editado
  const manejarEdicion = (e) => {
    e.preventDefault();
    console.log("Manejar edicion");
    let videoEditado = {
      id: idParaEditar,
      titulo: titulo,
      imagen_url: imagen,
      video_url: video,
      descripcion: descripcion,
      categoria: categoria,
    };
    console.log(videoEditado);
    editarVideo(idParaEditar, urlApi, videoEditado);
  };

  //editar video a la api
  async function editarVideo(id, urlApi, videoSeleccionado) {
    
    const response = await fetch(`${urlApi}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoSeleccionado),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el producto");
    }

    const videoEditado = await response.json();
    setActualizadorVideos(!actualizadorVideos); 
    alLimpiar();
    setAbrirModal(false);

    console.log("video editado con exito", videoEditado);
    return videoEditado;
  
  }


  return (
    <FormularioContext.Provider
      value={{
        titulo,
        actualizarTitulo,
        imagen,
        actualizarImagen,
        video,
        actualizarVideo,
        descripcion,
        actualizarDescripcion,
        categoria,
        actualizarCategoria,
        manejarEnvio,
        alLimpiar,
        videoAEditar,
        setIdParaEditar,
        manejarEdicion,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioContextProvider;
