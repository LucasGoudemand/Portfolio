import styles from "../../../styles/herosection/DescriptionUnderBigtitle.module.css";
import Button from "../button/Button";

export default function DescriptionUnderBigtitle() {
  return (
    <>
      <div className={styles.containerDescriptionUnderBigTitle}>
        <p className={styles.smalltitle}>
          Ce site web est conçu comme un site e-commerce. Vous pouvez constituer
          votre panier en fonction de mes compétences et passer commande pour me
          contacter. Ainsi, en fonction de votre commande, je pourrai savoir
          quelles compétences vous intéressent sur mon profil.
        </p>
        <Button href="#">
          Shop <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </div>
    </>
  );
}
