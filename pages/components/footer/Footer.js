import styles from "../../../styles/Footer.module.css";
import Link from "next/link";

export default function ProjectSectionContainer(props) {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.containerFooter}>
        <p>Site developpé en Next.js par Lucas Goudemand</p>
        <ul className={styles.navbar}>
          <li>
            <Link href="https://www.linkedin.com/in/goudemand-lucas/">
              Linkedin
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LucasGoudemand">Github</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/lucas.goudemand/">
              Instagram
            </Link>
          </li>
        </ul>
        <Link href="#startAnchor">Revenir en haut</Link>
      </div>
    </>
  );
}
