import { useEffect } from "react";
import { useCreateOrdersPost } from "../store/orders";

export const useOrder = () => {
  const order = useCreateOrdersPost((state) => state);

  console.log(order);

  //   useEffect(() => {
  //     order.fetchOrdersPost();
  //   }, []);
};
