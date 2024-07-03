import styles from "./Pie.module.css";
import logo from "../../assets/img/logo_black.png";

const Pie = () => {
  return (
    <>
      <footer className={styles.pie}>
        <img src={logo} alt="logo alura" />
          <a href="https://github.com/mirianGonzalez" rel="noopener"><p>©Mirian Yolanda Gonzalez</p>
         
          </a>
      </footer>
    </>
  );
};

export default Pie;
