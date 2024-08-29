import { create } from "zustand";
import { CartStateItem } from "../types/cart.types";
import { Api } from "../services/api-client";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

interface State {
  loading: boolean;
  error: boolean;
  address: CheckoutFormValues;
  totalAmount: number;
  items: CartStateItem[];
  token?: string;

  fetchOrdersPost: () => Promise<void>;
}
export const useCreateOrdersPost = create<State>((set, get) => ({
  address: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    comment: "",
  },
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  token: "",

  fetchOrdersPost: async () => {
    try {
      set({ loading: false, error: false });
      const data = await Api.orders.createOrdersPost();
      console.log(data);
      set(data);
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
