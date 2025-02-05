import {
  checkoutFormSchema,
  CheckoutFormValues,
  deliveryFormSchema,
  deliveryFormValues,
} from "@/components/shared/checkout/checkout-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateDeliveryOrder } from "../store/dataDelivery";

export const useDeliveryForm = () => {
  return useForm<deliveryFormValues>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      entrance: "",
      floor: "",
      delivery: "",
      address: "",
      house: "",
      flat: "",
    },
  });
};

export const useCheckoutForm = () => {
  const { deliveryData } = useCreateDeliveryOrder();
  return useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      //email: "",
      firstName: "",
      //lastName: "",
      phone: "",
      time: "",
      ...deliveryData,
    },
  });
};
