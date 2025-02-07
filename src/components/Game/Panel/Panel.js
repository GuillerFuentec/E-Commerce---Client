import styles from "./Panel.module.scss";
import { useState } from "react";
import { useCart } from "@/hooks";
import { useRouter } from "next/router";
import { WishListIcon } from "@/components/Shared";
import { useAuth } from "@/hooks";
import { ENV } from "@/utils";
import { Button, Container, Image, Icon } from "semantic-ui-react";
import { fn } from "@/utils";

export function Panel(props) {
  const {user} = useAuth();
  const router = useRouter();
  const { game } = props;
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();
  const buyPrice = fn.calcDiscountPrice(
    game.attributes.discount,
    game.attributes.price
  );

  const platform = game.attributes.platform.data;

  const addCartWrapper = () => {
    if (!user) {
      return router.replace("/login");
    }
    setLoading(true);    
    addCart(game.id);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image
          src={`${ENV.SERVER_HOST}${game.attributes.cover.data[0].attributes.url}`}
        />
      </div>
      <div className={styles.actionsContainer}>
        <div>
          <h3>{game.attributes.title}</h3>
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
            {game.attributes.discount > 0 && (
              <>
                <span className={styles.origianlPrice}>
                  <Icon name="tag" />${game.attributes.price}
                </span>
                <span className={styles.discount}>
                  -{game.attributes.discount}%
                </span>
              </>
            )}
            <span className={styles.price}>${buyPrice}</span>
          </div>
          <Button primary fluid onClick={addCartWrapper} loading={loading}>
            Add to Cart
          </Button>
          <WishListIcon gameId={game.id} className={styles.heart} />
        </div>
      </div>
    </Container>
  );
}
