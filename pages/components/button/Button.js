import Link from "next/link";
import styles from "../../../styles/button/Button.module.css";

export default function Button({ href, children, icon }) {
  return (
    <>
      <Link href={href} className={styles.button}>
        {icon}
        {children}
      </Link>
    </>
  );
}
