"use client";

import styles from "./style.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
