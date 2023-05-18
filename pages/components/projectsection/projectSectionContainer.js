import styles from "../../../styles/projectsection/ProjectSectionContainer.module.css";
import Project from "../projectsection/Project";

export default function ProjectSectionContainer(props) {
  return (
    <>
      <div className={styles.containerProject} id="ProjectAnchor">
        <h2>Mes Projets</h2>
        <div className={styles.line}></div>
        <Project
          titleSummary="MAIZON"
          infoProjet="(AirBNB like) Application de location immobiliaire en React.js. Inclu un systeme de fiche pour chaque logements, systeme de ranking ainsi qu'une photo du proprietaire."
          language1="React.js"
          language2="Nodes.js"
          language3="Javascript"
          language4="Html5"
          sourceImage1="/maizon1.png"
          sourceImage2="/maizon2.png"
          sourceImage3="/maizon3.png"
          sourceImage4="/maizon4.png"
        />
        <div className={styles.line}></div>
        <Project
          titleSummary="CA BRÛLE"
          infoProjet="Application de ranking de sauces en Express/Node.js. Inclu une gestion CRUD avec MongoDB. Dependances utilisées: bCrypt, dotEnv, FS, jsonwebToken, mongoose, multer, shortID "
          language1="Express"
          language2="Nodes.js"
          language3="Javascript"
          language4=""
          sourceImage1="/pikante1.webp"
          sourceImage2="/pikante2.webp"
          sourceImage3="/pikante3.webp"
          sourceImage4="/pikante1.webp"
        />
        <div className={styles.line}></div>
        <Project
          titleSummary="SOFA"
          infoProjet="Site E-commerce pour l'achat de canapés. Fetch des items depuis une API, gestions des stocks, des prix et des couleurs dynamiquement. Gestion du panier avec modifications des quantitées et des prix en temps réel."
          language1="Express"
          language2="Nodes.js"
          language3="Javascript"
          language4=""
          sourceImage1="/sofa1.png"
          sourceImage2="/sofa2.png"
          sourceImage3="/sofa3.png"
          sourceImage4="/sofa4.png"
        />
      </div>
    </>
  );
}
