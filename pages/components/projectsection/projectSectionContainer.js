import styles from "../../../styles/projectsection/ProjectSectionContainer.module.css";
import Project from "../projectsection/Project";

export default function ProjectSectionContainer(props) {
  return (
    <>
      <div className={styles.containerProject}>
        <h2>Mes Projets</h2>
        <div className={styles.Line}></div>
        <Project
          titleSummary="MAIZON"
          infoProjet="(AirBNB like) Application de location immobiliaire en React.js. Inclu un systeme de fiche pour chaque logements, systeme de ranking ainsi que photo du proprietaire."
          language1="React.js"
          language2="Nodes.js"
          language3="Javascript"
          language4="Html5"
        />
        <Project titleSummary="CA BRÛLE" />
        <Project titleSummary="SOFA" />
        <Project titleSummary="MAIZON" />
      </div>
    </>
  );
}
