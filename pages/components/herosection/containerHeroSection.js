import styles from "../../../styles/herosection/containerHeroSection.module.css";
import Bigtitle from "./Bigtitle";
import DescriptionUnderBigTitle from "./DescriptionUnderBigtitle";

export default function containerHeroSection() {
  return (
    <>
      <div className={styles.containerHeroSection}>
        <Bigtitle />
        <DescriptionUnderBigTitle />
      </div>
    </>
  );
}
