import styles from "./ModalEditar.module.css"
import Formulario from "../../pages/NuevoVideo/components/Formulario";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FormularioContext } from "../../context/FormularioContext";

const ModalEditar = () => {
  const { abrirModal, setAbrirModal } = useContext(GlobalContext);
  const { alLimpiar, manejarEdicion } = useContext(FormularioContext);

  const manejarModal = () =>{
    alLimpiar()
    setAbrirModal(false)
  }

  return (
    <>
    <div className={styles.overlay} ></div>
      <dialog className={styles.contenedor_modal} open={abrirModal}>
        
        <Formulario titulo="EDITAR CARD" alLimpiar={alLimpiar} manejarEnvio={manejarEdicion} />

        <form className={styles.contenedor_boton} method="dialog">
          <button>
            <img
              onClick={() => manejarModal(false)}
              src="/img/cancel.png"
              alt="cancelar"
            />
          </button>
        </form>
       
      </dialog>
       
    </>
  );
};

export default ModalEditar;
