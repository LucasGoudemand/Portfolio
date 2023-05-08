import styles from "../../../styles/explanation/Explanation.module.css";

export default function Explanation({ numbers, text }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.line} />
        <div className={styles.data}>
          <h3 className={styles.number}>{numbers}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </>
  );
}
