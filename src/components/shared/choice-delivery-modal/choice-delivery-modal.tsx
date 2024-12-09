"use client";

import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MetodDelivery } from "./metod-delivery";
import { ChoiceDeliver } from "./choice-deliver";
import { FormRadioGroup } from "../form-components";

interface DeliveryProps {
  delivery: string;
  address: string;
}

export const ChoiceDeliveryModal: FC = () => {
  const form = useForm<DeliveryProps>();

  const [activeDelivery, setActiveDelivery] = useState<"delivery" | "pickup">(
    "pickup"
  );

  const onSubmit = (data: DeliveryProps) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1000px] h-96 mx-0 ">
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
            {form.formState.errors.delivery && (
              <p className="text-red-500 text-center">
                Выберите способ доставки
              </p>
            )}
            <p className="text-center text-2xl font-bold">
              При выборе опции "Самовывоз", некоторые блюда могут быть
              недоступны
            </p>
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
            {form.formState.errors.address && (
              <p className="text-red-500 text-center">
                Выберите адрес доставки
              </p>
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
