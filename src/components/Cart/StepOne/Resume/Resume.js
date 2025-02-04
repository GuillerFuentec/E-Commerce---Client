import styles from "./Resume.module.scss";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forEach } from "lodash";
import { fn } from "@/utils";

export function Resume(props) {
  const { games } = props;
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = {
      original: 0,
      discount: 0,
      price: 0,
    };

    forEach(games, (game) => {
      const price = fn.calcDiscountPrice(
        game.attributes.discount,
        game.attributes.price
      );
      total = {
        original: total.original + game.attributes.price * game.quantity,
        discount:
          total.discount + (game.attributes.price - price) * game.quantity,
        price: total.price + price * game.quantity,
      };
    });
    setTotal(total);
  }, [games]);

  return (
    <div>
      <h2>Resume</h2>
    </div>
  );
}
