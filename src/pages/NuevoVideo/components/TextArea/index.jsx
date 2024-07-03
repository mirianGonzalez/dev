import styles from "./TextArea.module.css";

const TextArea = (props) => {
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <>
      <div className={styles.contenedor_descripcion}>
        <label htmlFor={props.name}>{props.titulo} </label>
        <textarea
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.valor}
          required={props.required}
          onChange={manejarCambio}
        />
      </div>
    </>
  );
};

export default TextArea;
