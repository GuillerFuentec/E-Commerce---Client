import styles from "./Addresses.module.scss";
import classNames from "classnames";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { Button } from "semantic-ui-react";
import { BasicModal, Separator } from "@/components/Shared";
import { AddressForm } from "@/components/Account/Address/AddressForm";

const addressCtrl = new Address();

export function Addresses(props) {
  const { addressesSelected, setAddressesSelected } = props;
  const [addresses, setAddresses] = useState(null);
  const [reload, setReload] = useState(false);
  const [show, setShow] = useState(false);

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
  }, [reload]);

  const onReload = () => setReload((prevState) => !prevState);
  const openCLose = () => setShow((prevState) => !prevState);

  if (Array.isArray(addresses) && addresses.length === 0) {
    return (
      <div className={styles.addresses}>
        <h2>Addresses</h2>
        <Separator height={20} />
        <p>You don't have any shipping address yet</p>
        <Separator height={40} />
        <Button primary className={styles.addBtn} onClick={openCLose}>
          Create new Address
        </Button>
        <BasicModal show={show} onClose={openCLose} title="New Address">
          <AddressForm onReload={onReload} onClose={openCLose} />
        </BasicModal>
      </div>
    );
  }

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
