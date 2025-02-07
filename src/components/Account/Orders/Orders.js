import styles from "./Orders.module.scss";
import { useState, useEffect } from "react";
import { Order as OrderCtrl } from "@/api";
import { Order } from "./Order";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";

const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!orders) return <NoResult message="You don't have any order" />;

  return (
    <div>
      {orders.data.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}
