import styles from "./CardVideo.module.css";
import icono_borrar from "./icono_borrar.png";
import icono_editar from "./icono_editar.png";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { FormularioContext } from "../../../../context/FormularioContext";

const CardVideo = props => {
  const {
    setAbrirModal,
    setVideoSeleccionado,
    videos,
    setVideos,
    urlApi,
    videoRef,
    formRef
  } = useContext(GlobalContext);

  const { videoAEditar, setIdParaEditar } = useContext(FormularioContext);

  //se añade el color al objeto video
  props.datos.color = props.color;
  const videoClicado = props.datos;

  // funcion eliminar video

  const eliminarVideo = id => {
    console.log("video eliminado id: ", id);
    fetch(`${urlApi}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("La solicitud de eliminación de video falló");
        }
        return response.json();
      })
      .then(() => {
        const videosActualizados = videos.filter(video => video.id !== id);
        setVideos(videosActualizados);
      })
      .catch(error => {
        console.error("Error al eliminar el video:", error);
      });
  };

  //Al Editar
  const alEditar = () => {
    setAbrirModal(true);
    videoAEditar(videoClicado);
    setIdParaEditar(videoClicado.id);

    window.scrollTo({
      top: formRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  const clickEnImagen = () => {
    setVideoSeleccionado(videoClicado);
    window.scrollTo({
      top: videoRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div
        className={styles.contenedor_card}
        style={{ borderColor: props.color }}
        data-index={props.datos.id}
      >
        <div className={styles.contenedor_imagen}>
          <img
            className={styles.imagen_video}
            src={props.datos.imagen_url}
            alt="portada card"
            onClick={() => clickEnImagen()}
          />
        </div>
        <div
          className={styles.contenedor_opciones}
          style={{ borderColor: props.color }}
        >
          <span
            className={styles.borrar_card}
            onClick={() => eliminarVideo(props.datos.id)}
          >
            <img
              className={styles.iconos}
              src={icono_borrar}
              alt="icono borrar"
            />{" "}
            <p>BORRAR</p>
          </span>
          <span onClick={() => alEditar()} className={styles.editar_card}>
            <img
              className={styles.iconos}
              src={icono_editar}
              alt="icono editar"
            />{" "}
            <p>EDITAR</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardVideo;
