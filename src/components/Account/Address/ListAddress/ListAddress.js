import { useState, useEffect } from "react";
import { Address as AddressCtrl } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./ListAddress.module.scss";
import { Address } from "./Address";
import { map } from "lodash";
import { AddAddress } from "../AddAddress";

const addressCtrl = new AddressCtrl();

export function ListAddress(props) {
  const {reload, onReload} = props
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAddress(user.id);

        setAddresses(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, [reload]);

  if (!addresses) return null;

  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <Address
          key={address.id}
          addressID={address.id}
          address={address.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
