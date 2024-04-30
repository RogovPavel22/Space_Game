"use client";

import { useState } from "react";

import clsx from "clsx";
import styles from "./sltyle.module.scss";

interface AnimatedMenuProps {
  className?: string;
}

interface Item {
  id: string;
  title: string;
  text?: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    id: "01",
    title: "Genesis lands drop",
    text: "An original collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.",
    imageUrl: "/animatedMenu/01.png",
  },
  {
    id: "02",
    title: "Staking goes live",
    text: "The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.",
    imageUrl: "/animatedMenu/02.png",
  },
  {
    id: "03",
    title: "New worlds emerge",
    text: "Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.",
    imageUrl: "/animatedMenu/03.png",
  },
  {
    id: "04",
    title: "Avatar collection drop",
    text: "Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.",
    imageUrl: "/animatedMenu/04.png",
  },
  {
    id: "05",
    title: "Let's the game begin",
    imageUrl: "/animatedMenu/05.png",
  },
];

export const AnimatedMenu: React.FC<AnimatedMenuProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div className={clsx(styles.animatedMenu, className)}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={clsx(
              styles.animatedMenuItem,
              activeItem === index && styles.animatedMenuItemActive,
              activeItem === 0 && styles.animatedMenuItemPink
            )}
            onClick={() => setActiveItem(index)}
          >
            <div className={styles.animatedMenuItemContent}>
              <span className={styles.animatedMenuItemNumber}>{item.id}</span>
              <h4 className={styles.animatedMenuItemTitle}>{item.title}</h4>
              {item.text && (
                <p className={styles.animatedMenuItemText}>{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.animatedImages}>
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url('${item.imageUrl}')`,
            }}
            className={clsx(
              styles.animatedImagesItem,
              activeItem === index && styles.animatedImagesItemActive
            )}
          />
        ))}
      </div>
    </>
  );
};
