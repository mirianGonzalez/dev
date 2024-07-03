import styles from "./TituloCategoria.module.css";

const TituloCategoria = (props) => {
  return (
    <>
      <div
        className={styles.titulo_categoria}
        style={{ backgroundColor: props.color }}
      >
        <h2> {props.categoria} </h2>
      </div>
    </>
  );
};

export default TituloCategoria;
