import Formulario from "./components/Formulario";
import styles from "./NuevoVideo.module.css";
import TituloNuevoVideo from "./components/TituloNuevoVideo";
import { FormularioContext } from "../../context/FormularioContext";
import { useContext } from "react";

const NuevoVideo = () => {
  const { manejarEnvio, alLimpiar } = useContext(FormularioContext);

  return (
    <>
      <main className={styles.contenedor_principal}>
        <TituloNuevoVideo />
        <Formulario
          titulo="Crear Tarjeta"
          manejarEnvio={manejarEnvio}
          alLimpiar={alLimpiar}
        />
      </main>
    </>
  );
};

export default NuevoVideo;
