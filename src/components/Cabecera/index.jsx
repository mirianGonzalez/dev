import Boton from "../Boton";
import styles from "./Cabecera.module.css";
import logo from "./alura-logo.png";
import { Link, useLocation } from "react-router-dom";

const Cabecera = () => {
  const location = useLocation();

  const estiloBtnhome =
    location.pathname === "/"
      ? `${styles.boton_activo}`
      : `${styles.boton_inactivo}`;
  const estiloBtnNuevo =
    location.pathname === "/nuevo-video"
      ? `${styles.boton_activo}`
      : `${styles.boton_inactivo}`;

  return (
    <>
      <div className={styles.contenedor}>
        <img className={styles.logo} src={logo} alt="logo alura" />
        <nav>
          <Link to="/" className={styles.enlaces} >
          <Boton clase={estiloBtnhome} >
          <img className={styles.iconos_nav} src={ location.pathname === "/" ? "/img/home_activo.png" : "/img/home_inactivo.png"} alt="icono home" />
            <span>HOME</span>
          </Boton>
           
          </Link>
          <Link to="/nuevo-video" className={styles.enlaces} >
          <Boton clase={estiloBtnNuevo} >
          <img className={styles.iconos_nav} src={ location.pathname === "/nuevo-video" ? "/img/nuevo_activo.png" : "/img/nuevo_inactivo.png"} alt="icono nuevo video" />
             <span>NUEVO VIDEO</span>
          </Boton>
           
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Cabecera;
