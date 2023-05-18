import styles from "../styles/Home.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContainerHeroSection from "./components/herosection/containerHeroSection";

import ExplanationContainer from "./components/explanation/ExplanationContainer";
import ShopSectionContainer from "./components/shopsection/shopSectionContainer";
import ProjectSectionContainer from "./components/projectsection/projectSectionContainer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <ContainerHeroSection />
      </section>
      <section>
        <ExplanationContainer />
      </section>
      <section>
        <ShopSectionContainer />
      </section>
      <section>
        <ProjectSectionContainer />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
