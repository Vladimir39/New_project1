import Cookies from "js-cookie";
import { axiosInstance } from "./instance";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { date } from "zod";

export const createOrdersPost = async (): Promise<CheckoutFormValues> => {
  const token = await Cookies.get("cartToken");

  return (
    await axiosInstance.post(
      "/orders",
      {},
      { headers: { Authorization: `${token}` } }
    )
  ).data;
};
