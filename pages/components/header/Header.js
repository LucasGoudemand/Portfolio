import styles from "../../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <Link href="#ExplanationAnchor">Shop</Link>
        </li>
        <li>
          <Link href="#ProjectAnchor">Projets</Link>
        </li>
        <li>
          <Link href="#">Me Contacter</Link>
        </li>
      </ul>
    </>
  );
}
