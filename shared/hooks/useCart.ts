import { useEffect } from "react";
import { useCartStore } from "../store/cart";

export const useCart = () => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
