import styles from "./Basket.module.scss";
import { ENV } from "@/utils";
import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";

export function Basket(props) {
  const { games } = props;
  const { changeQuantityItems } = useCart();

  const options = Array.from({ length: 6 }, (_, i) => {
    const value = i + 1;
    return {
      key: value,
      text: String(value),
      value,
    };
  });

  return (
    <div className={styles.basket}>
      <h2>Basket</h2>

      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
            <Image
              src={`${ENV.SERVER_HOST}${game.attributes.cover.data[0].attributes.url}`}
              alt={game.attributes.title}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                </div>
                <Icon name="trash alternate online" link />
              </div>
              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={game.quantity}
                  compact
                  onChange={(e, { value }) => changeQuantityItems(game.id, value)}
                />
                <span>
                  $
                  {fn.calcDiscountPrice(
                    game.attributes.discount,
                    game.attributes.price
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
