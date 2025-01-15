"use client";

import { FC, useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MetodDelivery } from "./metod-delivery";
import { ChoiceDeliver } from "./choice-deliver";
import { FormRadioGroup } from "../form-components";
import { deliveryFormValues } from "../checkout/checkout-form-schema";
import { useDeliveryForm } from "../../../../shared/hooks/useCheckoutForm";
import { useCreateDeliveryOrder } from "../../../../shared/store/dataDelivery";
import { Pencil } from "lucide-react";

export const ChoiceDeliveryModal: FC = () => {
  const form = useDeliveryForm();
  const [open, setOpen] = useState<boolean>(true);
  const [Delivery, setDelivery] = useState<deliveryFormValues>();
  const { setDeliveryData } = useCreateDeliveryOrder();
  const [activeDelivery, setActiveDelivery] = useState<"delivery" | "pickup">(
    "delivery"
  );

  useEffect(() => {
    const x = localStorage.getItem("delivery");
    if (x) {
      const y = JSON.parse(x!);
      setDelivery(y);
      setDeliveryData(y);
      setOpen(false);
      console.log(y);
    }
  }, []);

  const onSubmit = async (deliveryData: deliveryFormValues) => {
    await setDeliveryData(deliveryData);
    await setDelivery(deliveryData);
    localStorage.setItem("delivery", JSON.stringify(deliveryData));
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {Delivery ? (
          <div className="flex  gap-1 hover:text-primary cursor-pointer mb-5">
            <Pencil className="w-3 h-5" />
            <p className="font-bold text-sm">
              {Delivery.delivery} : {Delivery.address}
            </p>
          </div>
        ) : (
          "Тип доставки"
        )}
      </DialogTrigger>

      <DialogContent className="max-w-[1000px] min-h-[400px] mx-0 ">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-between h-full"
          >
            <MetodDelivery
              onClick={(method: "delivery" | "pickup") =>
                setActiveDelivery(method)
              }
              activeDelivery={activeDelivery}
            />
            {activeDelivery === "pickup" ? (
              <p className="text-center text-2xl font-bold">
                При выборе опции `Самовывоз`, некоторые блюда могут быть
                недоступны
              </p>
            ) : (
              <p>Введите адрес доставки</p>
            )}

            {activeDelivery === "pickup" ? (
              <FormRadioGroup
                name={[
                  "г. Химки, пр-т Юбилейный, 51, к.1",
                  "г. Химки, пр-т Мельникова, 2Б, стр.1",
                ]}
              />
            ) : (
              <ChoiceDeliver />
            )}

            <Button type="submit" className="text-xl w-full">
              Продолжить
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
