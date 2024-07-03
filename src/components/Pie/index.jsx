import styles from "./Pie.module.css";
import logo from "../../assets/img/logo_black.png";

const Pie = () => {
  return (
    <>
      <footer className={styles.pie}>
        <img src={logo} alt="logo alura" />
          <a href="https://github.com/mirianGonzalez" rel="noopener">
          <p>Realizado por:<h2>©Mirian Yolanda Gonzalez</h2></p>
         
          </a>
      </footer>
    </>
  );
};

export default Pie;
