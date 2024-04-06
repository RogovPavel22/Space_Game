import Link from "next/link";

import styles from "./style.module.scss";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <Link href="/">Dusktopia</Link>
    </h1>
  );
};
