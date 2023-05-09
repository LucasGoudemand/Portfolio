import styles from "/styles/shopsection/Basketprev.module.css";
import Image from "next/image";
import { fc } from "react";

export default function BasketPrevisualisation(props) {
  return (
    <>
      <h2 className={styles.visualisationTitle}>Visualisation du panier</h2>
      <h2 className={styles.cvTitle}>Développeur Full-Stack</h2>
      <div className={styles.cvHeader}>
        <Image
          width={200}
          height={200}
          src="/lucas.png"
          className={styles.cvImage}
        />
        <div className={styles.cvHeaderInfo}>
          <p>Lucas Goudemand</p>
          <p>goudemand.lucas@gmail.com</p>
          <p>Paris</p>
          <p>Anglais/Français</p>
        </div>
      </div>
    </>
  );
}
