import styles from "./TituloYDescripcion.module.css";

const TituloYDescripcion = (props) => {
  return (
    <>
      <div className={styles.contenedor_titulo} >
        <h2>{props.titulo}</h2>
        <p>{props.descripcion} </p>
      </div>
    </>
  );
};

export default TituloYDescripcion;
