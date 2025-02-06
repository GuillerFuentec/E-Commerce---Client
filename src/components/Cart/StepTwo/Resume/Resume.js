import styles from "./Resume.module.scss";
import { useState, useEffect } from "react";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { Button, Icon } from "semantic-ui-react";
import { forEach, map } from "lodash";
import { Cart } from "@/api/cart";
import { fn } from "@/utils";
import { useAuth, useCart } from "@/hooks";

const cartCtrl = new Cart();

export function Resume(prosp) {
  const { games, addressesSelected } = prosp;
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { deleteAllItems } = useCart();

  useEffect(() => {
    let totalTemp = 0;
    forEach(games, (game) => {
      const price = fn.calcDiscountPrice(
        game.attributes.discount,
        game.attributes.price
      );
      totalTemp += price * game.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [games]);

  const onPayment = async () => {
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    console.log(result);

    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.payment(
        result.token,
        games,
        user.id,
        addressesSelected
      );

      if (response.status === 200) {
        setLoading(false);
      } else {
        console.error("Error to make payment");
      }
    }

    setTimeout(() => {
      deleteAllItems();
      goToStepThree();
    }, 1000);
  };

  const goToStepThree = () => {
    router.replace({ query: { ...router.query, step: 3 } });
  };

  if (!total) return null;

  return (
    <div className={styles.resume}>
      <h2>Resume</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {map(games, (game) => (
            <div key={game.id} className={styles.product}>
              <div>
                <p>{game.attributes.title}</p>
                <span>{game.attributes.platform.data.attributes.title}</span>
              </div>
              <span>
                {game.quantity > 0 && `${game.quantity} x $`}
                {fn.calcDiscountPrice(
                  game.attributes.discount,
                  game.attributes.price
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>${total}</span>
        </div>
        <Button
          primary
          fluid
          disabled={!addressesSelected}
          loading={loading}
          onClick={onPayment}
        >
          <Icon name="cart" />
          Make Payment
        </Button>
      </div>
    </div>
  );
}
