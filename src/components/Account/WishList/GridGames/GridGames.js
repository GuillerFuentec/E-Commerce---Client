import Link from "next/link";
import { map } from "lodash";
import { ENV, fn } from "@/utils";
import { Label, WishListIcon } from "@/components/Shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { wishlist, onReload } = props;

  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.attributes.game.data;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.attributes.slug}`}>
              <div>
                <img
                  src={`${ENV.SERVER_HOST}${game.attributes.cover.data[0].attributes.url}`}
                  alt={game.attributes.title}
                />
                {game.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>

              <div>
                <span>{game.attributes.title}</span>
                <span className={styles.price}>
                  $
                  {fn.calcDiscountPrice(
                    game.attributes.discount,
                    game.attributes.price
                  )}
                </span>
              </div>
            </Link>
            <WishListIcon gameId={game.id} className={styles.wishListIcon} removeCallback={onReload} />
          </div>
        );
      })}
    </div>
  );
}
