import styles from "../../../../styles/shopsection/Preset.module.css";

export default function Preset(props) {
  return (
    <>
      <h2
        className={styles.frontendClass}
        onClick={() => props.frontEndPreset()}
      >
        Front-End
      </h2>
      <h2
        className={styles.fullstackClass}
        onClick={() => props.fullStackPreset()}
      >
        Full-Stack
      </h2>
    </>
  );
}
