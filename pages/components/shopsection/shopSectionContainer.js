import styles from "../../../styles/shopsection/ShopSectionContainer.module.css";
import Items from "../shopsection/items/Items";
import Basket from "../shopsection/basket/Basket";
import Preset from "../shopsection/items/Preset";
import BasketPrev from "../shopsection/basketprev/BasketPrev";
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

  function removeASkill(value) {
    const newBasketArray = basketArray.filter((item) => item !== value);
    setBasketArray(newBasketArray);
  }
  function frontEndPreset() {
    const frontendArray = [
      "REACT.JS",
      "NEXT.JS",
      "JAVASCRIPT",
      "HTML5",
      "CSS3",
      "FIGMA",
      "SEO",
      "OPTIMISATION",
    ];
    setBasketArray([]);
    setBasketArray(frontendArray);
  }

  function fullStackPreset() {
    const fullstackArray = [
      "NODES.JS",
      "EXPRESS",
      "REACT.JS",
      "NEXT.JS",
      "SQL",
      "MONGODB",
      "WIN/UNIX",
      "API",
      "VMWARE",
    ];
    setBasketArray([]);
    setBasketArray(fullstackArray);
  }

  return (
    <>
      <div className={styles.containerShopSection}>
        <div className={styles.containerSkillsAndBasket}>
          <div className={styles.containerSkills}>
            <div className={styles.containerPreset}>
              <p> Preset: </p>
              <Preset
                fullStackPreset={fullStackPreset}
                frontEndPreset={frontEndPreset}
              />
            </div>
            <Items
              titleSummary="Stack"
              tag="Stack"
              addASkills={addASkills}
            ></Items>

            <Items
              titleSummary="DevOps"
              tag="DevOps"
              addASkills={addASkills}
            ></Items>

            <Items
              titleSummary="SoftSkills"
              tag="SoftSkills"
              addASkills={addASkills}
            ></Items>

            <Items
              titleSummary="Extra"
              tag="Extra"
              addASkills={addASkills}
            ></Items>
          </div>
          <div className={styles.containerBasket}>
            <div className={styles.line}></div>
            <div className={styles.flexBoxColumn}>
              <h2 className={styles.panierTitle}>Panier</h2>
              <Basket array={basketArray} removeASkills={removeASkill} />
            </div>
          </div>
        </div>
        <div className={styles.containerBasketPrevisualisation}>
          <BasketPrev array={basketArray} />
        </div>
      </div>
    </>
  );
}
