import styles from "./StepTwo.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ENV } from "@/utils";
import { useState } from "react";
import { Payment } from "./Payment";
import { Addresses } from "./Addresses";
import { Resume } from "./Resume";
import { Separator } from "@/components/Shared";

const stripeAsync = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo(props) {
  const { games } = props;
  const [addressesSelected, setAddressesSelected] = useState(null);

  return (
    <Elements stripe={stripeAsync}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
          <Addresses
            addressesSelected={addressesSelected}
            setAddressesSelected={setAddressesSelected}
          />
          <Separator height={50} />
          {addressesSelected && <Payment />}
        </div>
        <div className={styles.right}>
          <Resume addressesSelected={addressesSelected} games={games} />
        </div>
      </div>
    </Elements>
  );
}
