import styles from "./style.module.scss";

interface DiamondProps {
  type: "gradient" | "white";
}

export const Diamond: React.FC<DiamondProps> = ({ type = "gradient" }) => {
  return <span className={styles.diamond} />;
};
