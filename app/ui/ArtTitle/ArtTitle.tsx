import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

interface ArtTitleProps {
  type: "up" | "down";
  children: ReactNode;
  className?: string;
}

export const ArtTitle: React.FC<ArtTitleProps> = ({
  type,
  children,
  className,
}) => {
  return (
    <h3
      className={clsx(
        styles.title,
        className,
        type === "up" && styles.titleCenter
      )}
    >
      <span className={styles.titleText}>{children}</span>
      {type === "down" && (
        <svg
          width="160"
          height="12"
          viewBox="0 0 160 12"
          fill="none"
          className={styles.titleBorder}
        >
          <path
            d="M159.5 1L149.5 6.5H75.5L66.5 11H57L50 6.5H25M0 6.5H17"
            stroke="url(#paint0_linear_0_469)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_469"
              x1="159.5"
              y1="6"
              x2="0"
              y2="6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB800" />
              <stop offset="0.70625" stopColor="#FFBAC3" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {type === "up" && (
        <svg width="123" height="12" fill="none" className={styles.titleBorder}>
          <path
            stroke="url(#a)"
            strokeWidth="1.5"
            d="m122.5 11-10-5.5h-37l-9-4.5H57l-7 4.5H25m-25 0h17"
          />
          <defs>
            <linearGradient
              id="a"
              x1="122.5"
              x2="0"
              y1="6"
              y2="6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB800" />
              <stop offset=".706" stopColor="#FFBAC3" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </h3>
  );
};
