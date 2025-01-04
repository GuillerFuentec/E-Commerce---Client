import styles from "./GamesGrid.module.scss";
import Link from "next/link";
import { fn, ENV } from "@/utils";
import { Label } from "../Label";
import { map } from "lodash";

export function GamesGrid(props) {
<<<<<<< HEAD
  const { games } = props;

=======
  const { games } = props;  
  
>>>>>>> 14a6c2b
  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>
          <div>
            <span>{game.attributes.title}</span>
            <span className={styles.price}>
              {`$ ${fn.calcDiscountPrice(game.attributes.discount, game.attributes.price)}`}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
