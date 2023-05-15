import styles from "../../../styles/shopsection/ShopSectionContainer.module.css";
import Items from "../shopsection/items/Items";
import Basket from "../shopsection/basket/Basket";
import Preset from "../shopsection/items/Preset";
import BasketPrev from "../shopsection/basketprev/BasketPrev";
import data from "../../api/data.json";
import { useState } from "react";

import React from "react";
import useDownloader from "react-use-downloader";

export default function ShopSectionContainer() {
  const [basketArray, setBasketArray] = useState([
    "NODES.JS",
    "EXPRESS",
    "REACT.JS",
    "NEXT.JS",
    "SQL",
    "MONGODB",
    "WIN/UNIX",
    "API",
    "VMWARE",
    "TCP/IP",
    "FIREWALL",
    "SCRIPTING",
    "Perfectionniste",
    "Team player",
    "Motivé",
    "Passioné",
  ]);

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

  const [cvTitle, setCvTitle] = useState("Développeur Full-Stack"); // Ajout de la variable d'état cvTitl

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
      "VMWARE",
      "Perfectionniste",
      "Curieux",
      "Motivé",
      "Passioné",
    ];
    setBasketArray([]);
    setBasketArray(frontendArray);
    setCvTitle("Développeur Front-End");
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
      "TCP/IP",
      "FIREWALL",
      "SCRIPTING",
      "Perfectionniste",
      "Team player",
      "Motivé",
      "Passioné",
    ];
    setBasketArray([]);
    setBasketArray(fullstackArray);
    setCvTitle("Développeur Full-Stack");
  }

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  let fileUrl = "/FullStack.png";
  let filename = "FullStack.png";

  if (cvTitle == "Développeur Full-Stack") {
    fileUrl = "/FullStack.png";
    filename = "FullStack.png";
  } else {
    fileUrl = "/Front-end.png";
    filename = "Front-end.png";
  }

  return (
    <>
      <div className={styles.containerShopSection}>
        <div className={styles.containerSkillsAndBasket}>
          <div className={styles.containerSkills}>
            <div className={styles.containerPreset}>
              <p className={styles.pClass}> Preset: </p>
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
          <BasketPrev array={basketArray} cvTitle={cvTitle} />
        </div>
        <div className={styles.containerButton}>
          <button
            className={styles.buttonDownload}
            onClick={() => download(fileUrl, filename)}
          >
            Enregistrer en PDF{" "}
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>
    </>
  );
}
