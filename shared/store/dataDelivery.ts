import { create } from "zustand";

interface Delivery {
  deliveryData: {
    address: string;
    delivery: string;
    entrance?: string;
    floor?: string;
    comment?: string;
  };
  setDeliveryData: (data: Partial<Delivery["deliveryData"]>) => void;
}

export const useCreateDeliveryOrder = create<Delivery>((set) => ({
  deliveryData: {
    address: "",
    delivery: "",
    entrance: "",
    floor: "",
    comment: "",
  },
  setDeliveryData: (data) =>
    set((state) => ({
      deliveryData: { ...state.deliveryData, ...data },
    })),
}));
