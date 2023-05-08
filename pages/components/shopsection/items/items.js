import styles from "../../../../styles/shopsection/Items.module.css";
import data from "../../../api/data.json";

export default function Items(props) {
  const softSkillsItems = data.filter((item) => item.tags.includes(props.tag)); //on récupére du fichier json les items avec le tags passé en props (Stack, devOps..)

  const softSkillsTitles = softSkillsItems.map((item) => item.title); // On map chaque item et on récupére le titre

  return (
    <>
      <div className={styles.line}></div>
      <details className={styles.detailsClass}>
        <summary className={styles.summaryClass}>
          {props.titleSummary}
          <span className="material-symbols-outlined">add</span>
        </summary>
        <ul className={styles.ulClass}>
          {softSkillsTitles.map(
            (
              title //Map chaque item pour créer une balise li de chaque occurences trouvées
            ) => (
              <li key={title}>{title}</li>
            )
          )}
        </ul>
      </details>
    </>
  );
}
