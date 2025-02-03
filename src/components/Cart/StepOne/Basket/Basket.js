import styles from "./Basket.module.scss";
import { ENV } from "@/utils";
import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";

export function Basket(props) {
  const { games } = props;
  console.log(games);

  return (
    <div className={styles.basket}>
      <h2>Basket</h2>

      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
            <Image
              src={`${ENV.SERVER_HOST}/${game.attributes.cover.data[0].attributes.url}`}
              alt={game.attributes.title}
            />
            <div>
              <p>INFO</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
