import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../../../styles/projectsection/ProjectSlider.module.css";

export default function ProjectSlider(props) {
  return (
    <>
      <Splide
        options={{
          perPage: 1,
          gap: "1em",
          Height: "30vw",
          width: "40vw",
          heightRatio: 0.9,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img
            className={styles.Img}
            src={props.sourceImage1}
            alt="Image du projet"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={styles.Img}
            src={props.sourceImage2}
            alt="Image du projet"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={styles.Img}
            src={props.sourceImage3}
            alt="Image du projet"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={styles.Img}
            src={props.sourceImage4}
            alt="Image du projet"
          />
        </SplideSlide>
      </Splide>
    </>
  );
}
