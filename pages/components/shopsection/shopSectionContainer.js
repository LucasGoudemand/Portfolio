import styles from "../../../styles/shopsection/ShopSectionContainer.module.css";
import Items from "../shopsection/items/items";

export default function ShopSectionContainer() {
  return (
    <>
      <div className={styles.containerShopSection}>
        <div className={styles.containerSkills}>
          <Items titleSummary="Stack" tag="stack"></Items>

          <Items titleSummary="DevOps" tag="DevOps"></Items>

          <Items titleSummary="SoftSkills" tag="softskills"></Items>

          <Items titleSummary="Extra" tag="extra"></Items>
        </div>
      </div>
    </>
  );
}
