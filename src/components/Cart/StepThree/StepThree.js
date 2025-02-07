import styles from "./StepThree.module.scss";
import { Icon, Button } from "semantic-ui-react";
import Link from "next/link";

export function StepThree() {
  return <div className={styles.StepThree}>
    <Icon name="check circle outline" />
    <h2>Your order has been confirmen!</h2>
    <Button as={Link} href="/account" primary>
        See orders
    </Button>
  </div>;
}
