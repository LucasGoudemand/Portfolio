import styles from "../../../styles/explanation/ExplanationContainer.module.css";
import Explanation from "../explanation/Explanation";

export default function ExplanationContainer() {
  return (
    <>
      <div className={styles.containerExplanation}>
        <h2>Comment constituer mon panier ?</h2>
        <div className={styles.containerForExplanation}>
          <Explanation
            numbers="01"
            text="Découvrez mes différentes compétences.Elles sont classées par catégories: Stack, Devops, SoftSkills, Extra"
          />
          <Explanation
            numbers="02"
            text="Une fois que vous avez fait votre choix, vous pouvez simplement faire glisser et déposer la compétence que vous souhaitez, directement dans votre panier."
          />
          <Explanation
            numbers="03"
            text="Une fois que votre panier est finalisé, vous pouvez cliquer sur le bouton Commander. Cela enverra directement un e-mail avec votre commande, qui sera traitée dans les plus brefs délais."
          />
        </div>
      </div>
    </>
  );
}
