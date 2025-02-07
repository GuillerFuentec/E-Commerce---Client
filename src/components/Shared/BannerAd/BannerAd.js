import { Button, Container, Image } from "semantic-ui-react";
import Link from "next/link";
import { useAuth } from "@/hooks";
import styles from "./BannerAd.module.scss";

export function BannerAd(props) {
  const { user } = useAuth();
  const { title, subtitle, btnTitle, img } = props;
  return (
    <div className={styles.container}>
      <Container className={styles.containerImage}>
        <Image src={img} />
      </Container>

      <div className={styles.infoContainer}>
        <Container>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <Button as={Link} href={user ? "/" : "/join/sign-up"} primary>
            {btnTitle}
          </Button>
        </Container>
      </div>
    </div>
  );
}
