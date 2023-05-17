import styles from "../styles/Home.module.css";
import Header from "./components/header/Header";
import ContainerHeroSection from "./components/herosection/containerHeroSection";

import ExplanationContainer from "./components/explanation/ExplanationContainer";
import ShopSectionContainer from "./components/shopsection/shopSectionContainer";
import ProjectSectionContainer from "./components/projectsection/projectSectionContainer";

export default function Home() {
  return (
    <>
      <Header />
      <ContainerHeroSection />
      <ExplanationContainer />
      <ShopSectionContainer />
      <ProjectSectionContainer />
    </>
  );
}
