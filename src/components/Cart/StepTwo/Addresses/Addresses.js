import styles from "./Addresses.module.scss";
import classNames from "classnames";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function Addresses(props) {
  const { addressesSelected, setAddressesSelected } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();  

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAddress(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(`Console Error`, error);
      }
    })();
  }, []);

  return (
    <div className={styles.addresses}>
      <h2>Addresses</h2>

      {map(addresses, (address) => (
        <div
          key={address.id}
          className={classNames(styles.address, {
            [styles.active]: address.id === addressesSelected?.id,
          })}
          onClick={() => setAddressesSelected(address)}
        >
          <p>
            {address.attributes.name} {address.attributes.title}
          </p>
          <p>
            {address.attributes.address_line_1}, {address.attributes.zip_code},{" "}
            {address.attributes.state}, {address.attributes.city}
          </p>
        </div>
      ))}
    </div>
  );
}
