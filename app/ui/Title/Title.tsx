import clsx from "clsx";
import styles from "./style.module.scss";

interface TitleProps {
  size?: "Small" | "Medium" | "Large";
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  size = "Medium",
  children,
  className,
}) => {
  return (
    <h2 className={clsx(styles.title, styles[`title${size}`], className)}>{children}</h2>
  );
};
