import styles from "../../../../styles/shopsection/Basket.module.css";
import data from "../../../api/data.json";

export default function Basket(props) {
  const listOfSkills = props.array; //On appel la fonction addASkills qui a été passé en props qui est dans l'élément parent
  const expOfSkills = data.filter((item) => item.tags.includes(listOfSkills));
  return (
    <>
      <ul className={styles.ulClass}>
        {listOfSkills.map(
          (
            title //Map chaque item pour créer une balise li de chaque occurences trouvées
          ) => (
            <li key={title}>
              {title}
              <p>{expOfSkills.experience}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
