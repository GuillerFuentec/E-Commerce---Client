import styles from "./HeaderCart.module.scss";
import Link from "next/link";
import { Icon, Image } from "semantic-ui-react";
import { useRouter } from "next/router";
import { map } from "lodash";
import classNames from "classnames";
import { number } from "yup";

export function HeaderCart() {
  const {
    query: { step = 1 },
  } = useRouter();
  console.log(step);
  const currentStep = step;

  const steps = [
    { number: 1, title: "Cart" },
    { number: 2, title: "Payment" },
    { number: 3, title: "Checkout" },
  ];
  return (
    <div className={styles.headerCart}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/img/logo.png" alt="Gaming" />
        </Link>
      </div>
      <div className={styles.center}>
        {map(steps, (step) => (
          <div
            key={step.number}
            className={classNames({
              [styles.active]: step.number === Number(currentStep),
              [styles.success]: step.number < Number(currentStep),
            })}
          >
            <span className={styles.number}>
              <Icon name="check" />
              {step.number}
            </span>
            <span>{step.title}</span>
            <span className={styles.space} />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <Icon name="lock" />
        <div>
          <span>Secure Payment</span>
          <span>265bit SSL-Secure</span>
        </div>
      </div>
    </div>
  );
}
