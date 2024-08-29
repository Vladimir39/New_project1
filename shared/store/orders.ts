import { create } from "zustand";
import { CartStateItem } from "../types/cart.types";
import { Api } from "../services/api-client";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

interface OrderState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  token?: string;

  fetchOrdersPost: (address: CheckoutFormValues) => Promise<void>;
}
export const useCreateOrdersPost = create<OrderState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  token: "",

  fetchOrdersPost: async (address) => {
    try {
      console.log(address);
      set({ loading: false, error: false });
      const data = await Api.orders.createOrdersPost(address);
      console.log(data);
      //set();
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
