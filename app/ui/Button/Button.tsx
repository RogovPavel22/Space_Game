"use client";

import clsx from "clsx";
import styles from "./style.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={clsx(styles.button, className)}
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
