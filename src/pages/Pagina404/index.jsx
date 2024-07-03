import styles from "./Pagina404.module.css"

const Pagina404 = () => {
    return <main className={styles.contenedor} >
        <h2>Error 404: Página no Encontrada. </h2>
        <p>Lo sentimos, la página que estas buscando no se encuentra.</p>
        <img src="./img/imagen_404.jpg" alt="imagen 404" />
        
    </main>
}

export default Pagina404