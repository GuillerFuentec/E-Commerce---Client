import styles from "./GamesGrid.module.scss";
import Link from "next/link";
import { fn, ENV } from "@/utils";
import { Label } from "../Label";
import { map } from "lodash";

export function GamesGrid(props) {
  const { games } = props;
  console.log(games);
  
  
  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.slug}`}
          className={styles.game}
        >
          <div>
            <img
              src={`${ENV.SERVER_HOST}${game.url}`}
            />
            {game.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.discount}%`}
              </Label.Discount>
            )}
          </div>
          <div>
            <span>{game.title}</span>
            <span className={styles.price}>
              {`$ ${fn.calcDiscountPrice(
                game.discount,
                game.price
              )}`}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
