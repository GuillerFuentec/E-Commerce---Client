import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { ENV, fn } from "@/utils";
import { Label } from "@/components/Shared";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.wallpaper;
  const gameAttributes = game.attributes;
  const realaseDate = new Date(gameAttributes.realaseDate).toISOString();
  const price = fn.calcDiscountPrice(
    gameAttributes.discount,
    gameAttributes.price
  );

  const formatter = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedAmount = formatter.format(price);

  return (
    <div className={styles.container}>
      <Image
        src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`}
        className={styles.wallpaper}
      />
      <Link href={gameAttributes.slug} className={styles.infoContainer}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(realaseDate).minus({ day: 1 }).toRelative()}
          </span>
          <h2>{gameAttributes.title}</h2>
          <p className={styles.price}>
            <Label.Discount>-40%</Label.Discount>
            <span className={styles.finalPrice}>{formattedAmount}</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
