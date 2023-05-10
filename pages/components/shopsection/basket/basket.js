import styles from "../../../../styles/shopsection/Basket.module.css";
import data from "../../../api/data.json";

export default function Basket(props) {
  const skillsList = props.array.map((title, index) => {
    const exp = data.find((item) => item.title === title)?.experience; // on cherche dans le data l'expérience qui correspond au title
    return { title, exp };
  });

  return (
    <>
      {skillsList.map(({ title, exp }, index) => (
        <ul className={styles.ulClass} key={index}>
          <li>{title}</li>
          <li className={styles.expClass}>{exp}</li>
          <li>
            <span
              className="material-symbols-outlined"
              onClick={() => props.removeASkills(title)} // on fait appel a la function removeASkills de l'élément parent
            >
              delete
            </span>
          </li>
        </ul>
      ))}
    </>
  );
}
