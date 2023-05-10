import styles from "../../../../styles/shopsection/BasketprevTimeline.module.css";

export default function BasketPrevisualisationTimeline(props) {
  return (
    <>
      <div className={styles.containerTimeline}>
        <div className={styles.line}></div>
        <div className={styles.containerOpenskillsrh}>
          <h3>OPENSKILLS RH</h3>
          <p>
            Développeur FRONT-END <br></br>Création du site internet de l’agence
            OPEN SKILLS RH: -Wireframing du projet (FIGMA) -Maquette du projet
            sur FIGMA -Développement du site JAVASCRIPT/PHP/HTML/CSS -Gestion du
            SEO / Gestion des outils analytiques / Hébergement Performance..
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.containerVoyages}>
          <h3>VOYAGES</h3>
          <p>
            Australie, Nouvelle Zelande, Indonesie <br></br> Voyage en sac à dos
            en Oceanie. Cela ma permis de devenir bilingue en anglais.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.containerEilyps}>
          <h3>EILYPS</h3>
          <p>
            Administrateur Systèmes et Réseaux <br></br>230 machines, 200
            smartphones, 25 serveurs, 2 sites: - Gestion du parc informatique -
            Maintenance du parc informatique - Evolution du parc informatique -
            Gestion et migration de la flotte mobile - intervention sur ERP et
            CRM - Support à distance des sites distants - Réalisation de projets
            (migration messagerie..) - Gestion des contrats
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.containerCalcialiment}>
          <h3>CALCIALIMENT</h3>
          <p>
            Administrateur Systèmes et Réseaux <br></br>120 machines, 30
            smartphones, 30 serveurs, 5 sites: - Gestion du parc informatique -
            Maintenance du parc informatique - Evolution du parc informatique -
            Gestion et migration de la flotte mobile - Support à distance des
            sites distants - Réalisation de projet
          </p>
        </div>
      </div>
      <div className={styles.lineGreen}></div>
      <p>2023 - 2022</p>
      <p>2022 - 2019</p>
      <p>20219 - 2018</p>
      <p>2018 - 2016</p>
    </>
  );
}
