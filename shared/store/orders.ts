import { create } from "zustand";
import { Api } from "../services/api-client";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

interface OrderState {
  loading: boolean;
  error: boolean;

  fetchOrdersPost: (address: CheckoutFormValues) => Promise<void>;
}
export const useCreateOrdersPost = create<OrderState>((set, get) => ({
  error: false,
  loading: true,

  fetchOrdersPost: async (address) => {
    try {
      set({ loading: false, error: false });
      const order = await Api.orders.createOrdersPost(address);
      console.log(order);
      set(order);
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
