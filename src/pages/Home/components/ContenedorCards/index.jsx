import styles from "./ContenedorCards.module.css";
import TituloCategoria from "../TituloCategoria/";
import CardVideo from "../CardVideo/";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";

const ContenedorCards = (props) => {
  const { titulo, color } = props.datos;
  const { videos } = useContext(GlobalContext);
  //filtrado de videos por categoria
  const videosCategoria = videos.filter(video => video.categoria === titulo)
  
  

  return (
    <> { videosCategoria.length > 0 &&
      <section className={styles.contenedor}>
        <TituloCategoria categoria={titulo} color={color} />
        <section className={styles.contenedor_cards}>
          {videosCategoria.map((video) => (
            <CardVideo key={video.id} color={color} datos={video} />
          ))}
        </section>
      </section>
      }
    </>
  );
};

export default ContenedorCards;
