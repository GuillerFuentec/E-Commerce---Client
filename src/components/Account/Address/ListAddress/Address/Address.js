import { Button, Icon } from "semantic-ui-react";
import styles from "./Address.module.scss";

export function Address(props) {
  const { addressID, address } = props;
  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}</p>
          <p className={styles.addressInfo}>
            {address.address_line_1},{address.address_line_2},{address.state},
            {address.city},{address.zip_code}
          </p>
        </div>
        <div className={styles.actions}>
          <Button primary icon>
            <Icon name="pencil" />
          </Button>
          <Button primary icon>
            <Icon name="delete" />
          </Button>
        </div>
      </div>
    </>
  );
}
