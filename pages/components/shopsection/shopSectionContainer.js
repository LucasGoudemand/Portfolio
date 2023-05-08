import styles from "../../../styles/shopsection/ShopSectionContainer.module.css";
import Items from "../shopsection/items/items";
import Basket from "../shopsection/basket/basket";
import data from "../../api/data.json";
import { useState } from "react";

export default function ShopSectionContainer() {
  const [basketArray, setBasketArray] = useState([]);

  function addASkills(value) {
    // Création de la fonction addASkills qui ajoute dans le tableau basketArray les compétences séléctionnées
    if (basketArray.includes(value)) {
      //on check si la compétence a déja été séléctionnée
      return;
    } else {
      setBasketArray([...basketArray, value]); //on ajoute la compétence en plus dans le tableau
    }
  }
  console.log(basketArray);
  return (
    <>
      <div className={styles.containerShopSection}>
        <div className={styles.containerSkills}>
          <Items
            titleSummary="Stack"
            tag="stack"
            addASkills={addASkills}
          ></Items>

          <Items
            titleSummary="DevOps"
            tag="DevOps"
            addASkills={addASkills}
          ></Items>

          <Items
            titleSummary="SoftSkills"
            tag="softskills"
            addASkills={addASkills}
          ></Items>

          <Items
            titleSummary="Extra"
            tag="extra"
            addASkills={addASkills}
          ></Items>
        </div>
        <div className={styles.containerBasket}>
          <div className={styles.line}></div>
          <div className={styles.flexBoxColumn}>
            <h2 className={styles.panierTitle}>Panier</h2>
            <Basket array={basketArray} />
          </div>
        </div>
      </div>
    </>
  );
}
