"use client";

import { useState } from "react";
import { ArtMenuItem } from "./ArtMenuItem";

import styles from "./style.module.scss";

const itemsMenu = [
  {
    id: 1,
    title: "Blighted Badlands",
    image: "/images/blighted_badlands.jpg",
    href: "/",
    active: false,
  },
  {
    id: 2,
    title: "Glacial Frontier",
    image: "/images/glacial_frontier.jpg",
    href: "/",
    active: false,
  },
  {
    id: 3,
    title: "Sundered Grove",
    image: "/images/sundered_grove.jpg",
    href: "/",
    active: false,
  },
  {
    id: 4,
    title: "Sky Citadel",
    image: "/images/sky_citadel.jpg",
    href: "/",
    active: false,
  },
];

export const ArtMenu = () => {
  const [openedId, setOpenedId] = useState(0);
  return (
    <div className={styles.artMenu}>
      {itemsMenu.map((item) => (
        <ArtMenuItem
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            setOpenedId(item.id !== openedId ? item.id : 0);
          }}
          isOpened={item.id === openedId}
          {...item}
        />
      ))}
    </div>
  );
};
