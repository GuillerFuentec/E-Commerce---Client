import styles from "./Panel.module.scss";
import { WishListIcon } from "@/components/Shared";
import { ENV } from "@/utils";
import { Button, Container, Image, Icon } from "semantic-ui-react";
import { fn } from "@/utils";

export function Panel(props) {
  const { gameId, game } = props;
  const buyPrice = fn.calcDiscountPrice(game.discount, game.price)
  
  const platform = game.platform.data;
  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image
          src={`${ENV.SERVER_HOST}${game.cover.data[0].attributes.url}`}
        />
      </div>
      <div className={styles.actionsContainer}>
        <div>
          <h3>{game.title}</h3>
            {/* More Information Section */}
          <div className={styles.moreInfo}>
            <span>
              <Image
                src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}
              />
            {platform.attributes.title}
            </span>
            <span>
              <Icon name="check" />
              En Stock
            </span>
          </div>
          {/* Price */}
          <div className={styles.price}>
            {game.discount >  0 && (
                <>
                    <span className={styles.origianlPrice}>
                        <Icon name="tag"/>
                        ${game.price}
                    </span>
                    <span className={styles.discount}>-{game.discount}%</span>
                </>
            )}
            <span className={styles.price}>${buyPrice}</span>
          </div>
          <Button primary fluid>
            Buy Now
          </Button>
          <WishListIcon gameId={game.id} className={styles.heart}/>
        </div>
      </div>
    </Container>
  );
}
