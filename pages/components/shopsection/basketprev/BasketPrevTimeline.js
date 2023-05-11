import styles from "../../../../styles/shopsection/BasketprevTimeline.module.css";

export default function BasketPrevisualisationTimeline(props) {
  return (
    <>
      <div className={styles.containerTimeline}>
        <div className={styles.lineOpenskillsrh}>
          <p>2023 - 2022</p>
        </div>
        <div className={styles.containerOpenskillsrh}>
          <h3>OPENSKILLS RH</h3>
          <p>
            Développeur FRONT-END <br></br>
            <br></br>Création du site internet de l’agence OPEN SKILLS RH:
            <br></br>
            <br></br>
          </p>
          <ul>
            <li>Wireframing du projet (FIGMA)</li>
            <li>Maquette du projet sur FIGMA</li>
            <li>Développement du site JAVASCRIPT/PHP/HTML/CSS</li>
            <li>Gestion du SEO </li>
            <li>Gestion des outils analytiques</li>
            <li>Hébergement</li>
            <li>Performance</li>
          </ul>
        </div>
        <div className={styles.lineVoyages}>
          <p>2022 - 2019</p>
        </div>
        <div className={styles.containerVoyages}>
          <h3>VOYAGES</h3>
          <p>
            Australie, Nouvelle Zelande, Indonesie <br></br>
            <br></br> Voyage en sac à dos en Oceanie. Cela ma permis de devenir
            bilingue en anglais.
          </p>
        </div>
        <div className={styles.lineEilyps}>
          <p>2019 - 2018</p>
        </div>
        <div className={styles.containerEilyps}>
          <h3>EILYPS</h3>
          <p>
            Administrateur Systèmes et Réseaux <br></br>
            <br></br>230 machines, 200 smartphones, 25 serveurs, 2 sites:
            <br></br>
            <br></br>
          </p>
          <ul>
            <li>Gestion du parc informatique</li>
            <li>Maintenance du parc informatique</li>
            <li>Evolution du parc informatique</li>
            <li>Gestion et migration de la flotte mobile </li>
            <li>intervention sur ERP et CRM</li>
            <li>Support à distance des sites distants</li>
            <li>Réalisation de projets (migration messagerie..)</li>
            <li>Gestion des contrats</li>
          </ul>
        </div>
        <div className={styles.lineCalcialiment}>
          <p>2018 - 2016</p>
        </div>
        <div className={styles.containerCalcialiment}>
          <h3>CALCIALIMENT</h3>
          <p>
            Administrateur Systèmes et Réseaux <br></br>
            <br></br>120 machines, 30 smartphones, 30 serveurs, 5 sites:
            <br></br>
            <br></br>
          </p>
          <ul>
            <li>Gestion du parc informatique</li>
            <li>Maintenance du parc informatique</li>
            <li>Evolution du parc informatique</li>
            <li>Gestion et migration de la flotte mobile </li>
            <li>Support à distance des sites distants</li>
            <li>Réalisation de projets (migration messagerie..)</li>
          </ul>
        </div>
        <div className={styles.lineGreen}></div>
      </div>
    </>
  );
}
