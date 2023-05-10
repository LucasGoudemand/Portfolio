import styles from "../../../../styles/shopsection/BasketprevSkills.module.css";
import data from "../../../api/data.json";

export default function BasketPrevisualisation(props) {
  const findTheTags = props.array.flatMap((item) => {
    //flatMap sert à créer un seul tableau et pas un nouveau tableau à chaque fois
    // On map chaque item de data et récupère seulement les éléments qui contiennent le title présent dans le props.array (le panier)
    return data.filter((dataItem) => dataItem.title.includes(item));
  });

  const displayByTags = findTheTags.filter((item) =>
    item.tags.includes(props.title)
  );

  return (
    <>
      <div className={styles.containerBasketPrevSkills}>
        <div className={styles.line}></div>
        <h2 className={styles.containerTitle}>{props.title} - </h2>

        {displayByTags.map(
          (
            item,
            index //Map chaque item pour créer une balise li de chaque occurences trouvées
          ) => (
            //On appel la fonction addASkills qui a été passé en props qui est dans l'élément parent
            <ul key={index} className={styles.ulClass}>
              <li className={styles.liClassTitle}>{item.title}</li>
              <li className={styles.liClassExp}>EXP: {item.experience}</li>
            </ul>
          )
        )}
      </div>
    </>
  );
}
