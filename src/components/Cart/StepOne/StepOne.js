import styles from "./StepOne.module.scss";
import { Basket } from "./Basket";

export function StepOne(prosp) {
  const { games } = prosp;

  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket games={games} />
      </div>
      <div className={styles.right}>
        <p>Summary</p>
      </div>
    </div>
  );
}
