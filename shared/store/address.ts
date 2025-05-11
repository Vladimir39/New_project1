import { create } from "zustand";
import { Api } from "../services/api-client";

interface ResAddress {
  url: string;
  address: {
    type: string;
    addressHome: string;
    house: string;
    flat: string;
    entrance: string;
    floor: string;
  };
  token: string;
  message: string;
}

interface AddressState {
  resAddress: ResAddress | null;
  loading: boolean;
  error: boolean;
  setAddress: (address: string) => Promise<ResAddress | null>;
  fetchAddress: () => Promise<void>;
}

export const useAddressStore = create<AddressState>((set) => ({
  resAddress: null,
  error: false,
  loading: true,
  setAddress: async (address) => {
    try {
      set({ loading: true, error: false });
      const resAddress = await Api.address.postAddress(address);
      console.log(resAddress);
      set({ resAddress, loading: false });
      return resAddress;
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
  fetchAddress: async () => {
    set({ loading: true });
    try {
      const resAddress = await Api.address.getAddress();
      console.log(resAddress.data);
      set({ resAddress, loading: false });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
