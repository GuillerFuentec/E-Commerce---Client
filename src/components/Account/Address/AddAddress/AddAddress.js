import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../AddressForm";
import { useState } from "react";
import styles from "./AddAddress.module.scss";

export function AddAddress() {
  const [show, setShow] = useState(false);

  const openCLose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button
        primary
        className={styles.addBtn}
        onClick={openCLose}
      >
        Create
      </Button>
      <BasicModal show={show} onClose={openCLose} title='New Address' >
        <AddressForm onClose={openCLose}/>
      </BasicModal>
    </>
  );
}
