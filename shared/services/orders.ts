import Cookies from "js-cookie";
import { axiosInstance } from "./instance";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

interface Order {
  count: number;
  url: string;
}

export const createOrdersPost = async (
  address: CheckoutFormValues
): Promise<Order> => {
  //const token = await Cookies.get("cartToken");
  return (
    await axiosInstance.post("/orders", address, {
      //headers: { Authorization: `${token}` },
      withCredentials: true,
    })
  ).data;
};
