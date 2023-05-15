import styles from "../styles/Home.module.css";
import Header from "./components/header/Header";
import Bigtitle from "./components/herosection/Bigtitle";
import DescriptionUnderBigTitle from "./components/herosection/DescriptionUnderBigtitle";
import ExplanationContainer from "./components/explanation/ExplanationContainer";
import ShopSectionContainer from "./components/shopsection/shopSectionContainer";
import ProjectSectionContainer from "./components/projectsection/projectSectionContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Bigtitle />
      <DescriptionUnderBigTitle />
      <ExplanationContainer />
      <ShopSectionContainer />
      <ProjectSectionContainer />
    </>
  );
}
