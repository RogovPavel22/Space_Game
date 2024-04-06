import Link from "next/link";

import clsx from "clsx";
import styles from "./style.module.scss";

const socialNetworks = [
  {
    id: 1,
    title: "Discord",
    className: "Discord",
    link: "https://discord.com/",
  },
  {
    id: 2,
    title: "Twitter",
    className: "Twitter",
    link: "https://twitter.com/",
  },
  {
    id: 3,
    title: "AntDesign",
    className: "AntDesign",
    link: "https://ant.design/",
  },
];

export const SocialNetworks = () => {
  return (
    <ul className={styles.socialNetwork}>
      {socialNetworks.map((item) => (
        <li className={styles.socialNetwork_item} key={item.id}>
          <Link
            className={clsx(styles.socialNetwork_link, styles[item.className])}
            href={item.link}
            target="_blank"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
