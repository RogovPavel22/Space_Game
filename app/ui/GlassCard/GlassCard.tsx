import clsx from "clsx";

import styles from "./styles.module.scss";

interface GlassCardProps {
  type: "color" | "dark";
  imageUrl: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ type, imageUrl }) => {
  return (
    <div className={clsx(styles.glassCard, styles[type])}>
      <img src={imageUrl} alt="Card" className={styles.glassCardImage}/>
    </div>
  );
};
