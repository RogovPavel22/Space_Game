import { Logo } from "./ui/Logo";
import { SocialNetworks } from "./ui/SocialNetworks";
import { Button } from "./ui/Button";
import { Title } from "./ui/Title";
import { Navigation } from "./ui/Navigation";
import { ArtMenu } from "./ui/ArtMenu";
import { ArtTitle } from "./ui/ArtTitle";
import { AnimatedMenu } from "./ui/AnimatedMenu";

import clsx from "clsx";
import styles from "./ui/home.module.scss";

export default function Home() {
  async function click() {
    "use server";
  }

  return (
    <>
      <section className={clsx(styles.section, styles.section_intro)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <Button onClick={click}>Whitepaper</Button>
        </header>
        <Navigation />
        <div>
          <Title>From dusk to&nbsp;dawn</Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={click}>Mint</Button>
            </li>
            <li>
              <Button onClick={click}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
      <section className={clsx(styles.section, styles.section_factions)}>
        <Title size="Large">Factions</Title>
        <ArtMenu />
      </section>
      <section className={clsx(styles.section, styles.section_Animation)}>
        <ArtTitle type="down" className={styles.artTitle}>
          Our way
        </ArtTitle>
        <Title size="Small" className={styles.smallTitle}>
          Road
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            style={{ marginRight: "0.5rem" }}
          >
            <g clipPath="url(#clip0_0_729)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L1.43051e-06 -1.70474e-06L-2.74233e-07 39L19.3692 19.7599L19.3692 39Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_729">
                <rect
                  width="39"
                  height="39"
                  fill="white"
                  transform="translate(39) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
          Map
        </Title>
        <AnimatedMenu />
      </section>
    </>
  );
}
