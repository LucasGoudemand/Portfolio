import styles from "../../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <Link href="#">Shop</Link>
        </li>
        <li>
          <Link href="#">Projets</Link>
        </li>
        <li>
          <Link href="/contact">Me Contacter</Link>
        </li>
      </ul>
    </>
  );
}
