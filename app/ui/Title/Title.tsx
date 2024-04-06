import clsx from "clsx";
import styles from "./style.module.scss";

interface TitleProps {
  size?: "Medium" | "Large";
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ size = "Medium", children }) => {
  return (
    <h2 className={clsx(styles.title, styles[`title${size}`])}>{children}</h2>
  );
};
