import { Logo } from "./ui/Logo";
import { SocialNetworks } from "./ui/SocialNetworks";
import { Button } from "./ui/Button";
import { Title } from "./ui/Title";
import { Navigation } from "./ui/Navigation";
import { ArtMenu } from "./ui/ArtMenu";

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
      <section
        className={clsx(styles.section, styles.section_roadMap)}
      ></section>
    </>
  );
}
