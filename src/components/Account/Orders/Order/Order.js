import styles from "./Order.module.scss";
import { DateTime } from "luxon";
import { fn, ENV } from "@/utils";
import { useState } from "react";
import { BasicModal } from "@/components/Shared";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);
  const createdAt = new Date(order.attributes.createdAt).toISOString();
  const products = order.attributes.products;
  const address = order.attributes.addressShipping;

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalQuantity = () => {
    let total = 0;

    products.forEach((product) => {
      total += product.quantity;
    });

    return total;
  };

  return (
    <>
      <div className={styles.order} onClick={onOpenCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "us" }).toFormat(
              "dd/mm/yyyy"
            )}
          </span>
          <p>{getTotalQuantity()} products</p>
        </div>
        <p>${order.attributes.totalPayment.toFixed(2)}</p>
      </div>
      <BasicModal
        show={showModal}
        onClose={onOpenCloseModal}
        title="Order details"
      >
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img
              src={`${ENV.SERVER_HOST}${product.attributes.cover.data[0].attributes.url}`}
              alt={product.attributes.title}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.platform.data.attributes.title}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>{product.quantity}x</span>
                <span>
                  $
                  {fn.calcDiscountPrice(
                    product.attributes.discount,
                    product.attributes.price
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.attributes.title}</p>
            <p className={styles.addressInfo}>
              {address.attributes.name}, {address.attributes.address},{" "}
              {address.attributes.state}, {address.attributes.city},{" "}
              {address.attributes.postal_code}
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <p>TOTAL: {order.attributes.totalPayment.toFixed(2)}€</p>
        </div>
      </BasicModal>
    </>
  );
}
