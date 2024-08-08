import { useState } from "react";
import { Address as AddressCtrl } from "@/api";
import { BasicModal, Confirm } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import { Button, Icon } from "semantic-ui-react";
import styles from "./Address.module.scss";

const addresCtrl = new AddressCtrl();

export function Address(props) {
  const [showEdit, setShowEdit] = useState(false);
  const { addressID, address, onReload } = props;
  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await addresCtrl.deleteAddress(addressID);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

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
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>

      <Confirm
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="Are you sure wish delete this address?"
      />
      <BasicModal show={showEdit} onClose={openCloseEdit} title="Edit Address">
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressID={addressID}
          address={address}
        />
      </BasicModal>
    </>
  );
}
