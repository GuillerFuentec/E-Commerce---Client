import { Button, Icon, Label } from "semantic-ui-react";
import { useAuth, useCart } from "@/hooks";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./Account.module.scss";

export function Account() {
  const { user } = useAuth();
  const { total } = useCart();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  const goToCart = () => {
    if (!user) goToLogin;
    else router.push("/cart");
  };

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart} onClick={goToCart}>
        <Icon name="cart" />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      <Button
        icon
        className={classNames({ [styles.user]: user })}
        onClick={user ? goToAccount : goToLogin}
      >
        <Icon name="user outline" />
      </Button>
    </div>
  );
}
