import styles from "../../../styles/herosection/Bigtitle.module.css";

export default function Bigtitle() {
  return (
    <>
      <div className={styles.containerbBigTitle}>
        <div className={styles.title}>
          <strong>Full-Stack</strong> Developpeur
        </div>
        <p className={styles.smalltitle}>
          Spécialisé en javascript avec React.js/Next.js et node.js. Ex
          Administrateur Sys & Réseaux
        </p>
      </div>
    </>
  );
}
