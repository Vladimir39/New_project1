"use client";

import { FC, useState } from "react";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MetodDelivery } from "./metod-delivery";
import { ChoiceDeliver } from "./choice-deliver";
import { FormRadioGroup } from "../form-components";
import { deliveryFormValues } from "../checkout/checkout-form-schema";
import { useDeliveryForm } from "../../../../shared/hooks/useCheckoutForm";
import { useCreateDeliveryOrder } from "../../../../shared/store/dataDelivery";
import { useAddressStore } from "../../../../shared/store/address";

interface ReturnProps {
  setDeliveryAddress?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const ChoiceDeliveryInput: FC<ReturnProps> = ({
  setDeliveryAddress,
}) => {
  const form = useDeliveryForm();
  const setAddress = useAddressStore((state) => state.setAddress);
  const [activeDelivery, setActiveDelivery] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const { setDeliveryData } = useCreateDeliveryOrder();
  const onSubmit = async (deliveryData: deliveryFormValues) => {
    await setDeliveryData(deliveryData);
    const resAddress = await setAddress(deliveryData);

    if (resAddress) {
      location.href = "http://localhost:3000/";
    }
    localStorage.setItem("delivery", JSON.stringify(deliveryData));
  };
  return (
    <div className="max-w-[1000px] min-h-[400px] mx-auto p-5 max-[400px]:pb-0">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <MetodDelivery
            className="text-white text-center"
            onClick={(method: "delivery" | "pickup") => {
              setActiveDelivery(method);
              form.reset();
            }}
            activeDelivery={activeDelivery}
          />
          {activeDelivery === "pickup" ? (
            <p className="text-center text-lg font-bold  mt-5 text-white max-[600px]:text-sm">
              При выборе опции `Самовывоз`, некоторые блюда могут быть
              недоступны
            </p>
          ) : (
            <p className="text-center text-lg font-bold mt-5 text-white max-[600px]:text-sm">
              Введите адрес доставки
            </p>
          )}

          {activeDelivery === "pickup" ? (
            <FormRadioGroup
              name={[
                "г. Химки, пр-т Юбилейный, 33/2, стр.1",
                "г. Химки, пр-т Мельникова, 2Б, стр.1",
              ]}
            />
          ) : (
            <ChoiceDeliver />
          )}

          <Button type="submit" className="text-xl w-full mt-5">
            Продолжить
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
