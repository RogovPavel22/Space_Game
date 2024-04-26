"use client";

import clsx from "clsx";
import styles from "./style.module.scss";

export type TypeArtButton =
  | "BluePurple"
  | "GreenYellow"
  | "Blue"
  | "YellowPink"
  | "Transparent"
  | "White";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: TypeArtButton;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        type && styles.buttonType,
        type && styles[`button${type}`]
      )}
      onClick={() => {
        onClick();
      }}
    >
      <span className={styles.buttonText}>{children}</span>
      <span className={styles.buttonAngleLeft} />
      <span className={styles.buttonAngleRight} />
    </button>
  );
};
