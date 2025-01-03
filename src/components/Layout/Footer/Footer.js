import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/img/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Privacity Polities</Link>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Contact</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button
              as="a"
              href="https://www.linkedin.com/in/guillermo-copello-624222230/"
              circular
              color="linkedin"
              icon="linkedin"
            />
            <Button
              as="a"
              href="https://github.com/GuillerFuentec"
              circular
              color="black"
              icon="github"
            />
            <Button
              as="a"
              href="https://x.com/HackedbyGh"
              circular
              color="twitter"
              icon="twitter"
            />
          </div>
        </div>
        <div className={styles.copyright}>
          <span>Copyright 2024 gaming - All right reserved</span>
        </div>
      </Container>
    </div>
  );
}
