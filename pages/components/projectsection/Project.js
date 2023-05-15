import styles from "../../../styles/projectsection/Project.module.css";

export default function Project(props) {
  return (
    <>
      <details className={styles.detailsClass}>
        <summary className={styles.summaryClass}>
          {props.titleSummary}
          <span className="material-symbols-outlined">add</span>
        </summary>
        <div className={styles.ContainerInfoAndSlider}>
          <div className={styles.containerInfo}>
            {props.infoProjet}
            <h3 className={styles.classH3}>Languages: </h3>
            <ul className={styles.classUl}>
              <li>{props.language1}</li>
              <li>{props.language2}</li>
              <li>{props.language3}</li>
              <li>{props.language4}</li>
            </ul>
          </div>
          <div className={styles.containerSlider}>Slider</div>
        </div>
      </details>
    </>
  );
}
