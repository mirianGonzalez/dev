import styles from "./VideoDestacado.module.css";

const VideoDestacado = (props) => {
  return (
    <>
    
      <iframe
        className={styles.contenedor_video}
        
        src={props.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ borderColor: props.color }}
      ></iframe>
      
    </>
  );
};

export default VideoDestacado;
