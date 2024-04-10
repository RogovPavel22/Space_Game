import React from "react";
import Link from "next/link";

import styles from "./style.module.scss";
import clsx from "clsx";

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
    active: true,
  },
  {
    id: 2,
    title: "Factions",
    href: "/",
    active: false,
  },
  {
    id: 3,
    title: "Roadmap",
    href: "/",
    active: false,
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navLinks.map((item, i) => (
        <React.Fragment key={item.id}>
          <Link
            className={clsx(
              styles.navigation_link,
              item.active && styles.navigation_linkActive
            )}
            href={item.href}
          >
            {item.title}
          </Link>
          {i < navLinks.length - 1 && <span className={styles.navigation_star} />}
        </React.Fragment>
      ))}
    </nav>
  );
};
