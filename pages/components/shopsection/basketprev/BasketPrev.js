import styles from "/styles/shopsection/Basketprev.module.css";
import BasketPrevSkills from "./BasketPrevSkills";
import BasketPrevTimeline from "./BasketPrevTimeline";
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
          alt="Photo de Lucas Goudemand"
          className={styles.cvImage}
        />
        <div className={styles.cvHeaderInfo}>
          <p>Lucas Goudemand</p>
          <p>goudemand.lucas@gmail.com</p>
          <p>Paris</p>
          <p>Anglais/Français</p>
        </div>
      </div>
      <div className={styles.cvSkills}>
        <BasketPrevSkills array={props.array} title="Stack" />
        <BasketPrevSkills array={props.array} title="DevOps" />
        <BasketPrevSkills array={props.array} title="SoftSkills" />
        <BasketPrevSkills array={props.array} title="Extra" />
      </div>
      <div className={styles.cvTimeline}>
        <BasketPrevTimeline />
      </div>
    </>
  );
}
