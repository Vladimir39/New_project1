import Cookies from "js-cookie";
import { axiosInstance } from "./instance";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

export const createOrdersPost = async (
  address: CheckoutFormValues
): Promise<CheckoutFormValues> => {
  const token = await Cookies.get("cartToken");
  console.log(address);
  return (
    await axiosInstance.post("/orders", address, {
      headers: { Authorization: `${token}` },
    })
  ).data;
};
