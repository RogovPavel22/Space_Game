"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "../Button";
import { TypeArtButton } from "../Button/Button";

import styles from "./style.module.scss";

interface ArtMenuItemProps {
  id: number;
  href: string;
  image: string;
  title: string;
  isOpened: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const getTypeById = (id: number): TypeArtButton => {
  if (id === 1) {
    return "YellowPink";
  }

  if (id === 2) {
    return "Blue";
  }

  if (id === 3) {
    return "BluePurple";
  }

  return "GreenYellow";
};

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
  id,
  href,
  image,
  title,
  isOpened,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={clsx(styles.artMenuItem, isOpened && styles.artMenuItemActive)}
      onClick={onClick}
    >
      <h3 className={styles.artMenuTitle}>{title}</h3>
      <div className={clsx(styles.cardMore, styles.artMenuCard)}>
        <Button
          className={styles.cardMore_button}
          onClick={() => {}}
          type={getTypeById(id)}
        >
          More
        </Button>
        <Image
          className={styles.cardMoreImage}
          src={image}
          alt={title}
          width={271}
          height={184}
        />
      </div>
      <span className={styles.artMenuDecorator} />
    </Link>
  );
};
