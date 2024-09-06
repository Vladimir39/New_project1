import { create } from "zustand";
import { Api } from "../services/api-client";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

interface Order {
  count: number;
  url: string;
}
interface OrderState {
  loading: boolean;
  error: boolean;
  order: Order | null;

  fetchOrdersPost: (address: CheckoutFormValues) => Promise<Order | null>;
}
export const useCreateOrdersPost = create<OrderState>((set, get) => ({
  error: false,
  loading: false,
  order: null,

  fetchOrdersPost: async (address) => {
    try {
      set({ loading: true, error: false });
      const order = await Api.orders.createOrdersPost(address);
      console.log(order);
      set({ order, loading: false });
      return order;
    } catch (error) {
      console.log(error);
      set({ error: true });
      return null;
    }
  },
}));
