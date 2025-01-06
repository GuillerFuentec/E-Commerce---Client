import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";

export function Info(props) {
  const { game } = props;
  
  return (
    <Container className={styles.info}>
      <div className={styles.sumary}>
        <p>{game.sumary}</p>
      </div>
      <div className={styles.more}>
        <ul>
          <li>
            <span>Drop Date:</span> {game.realaseDate}
          </li>
        </ul>
      </div>
    </Container>
  );
}
