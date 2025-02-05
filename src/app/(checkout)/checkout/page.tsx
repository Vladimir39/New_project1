"use client";

import { FormProvider } from "react-hook-form";
import { CheckoutSidebar, Container, Title } from "@/components/shared";
import { useCart } from "../../../../shared/hooks/useCart";

import {
  ChechoutTimeDelivery,
  CheckoutButtonAddress,
  CheckoutCart,
  CheckoutDeliveryInForm,
  CheckoutPersonalForm,
} from "@/components/shared/checkout";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { useCreateOrdersPost } from "../../../../shared/store/orders";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCheckoutForm } from "../../../../shared/hooks/useCheckoutForm";
import { useCreateDeliveryOrder } from "../../../../shared/store/dataDelivery";

const Page = () => {
  const [submitting, setSubmitting] = useState(false);
  const [edit, setEdit] = useState<boolean>(true);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const { fetchOrdersPost } = useCreateOrdersPost();
  const { deliveryData } = useCreateDeliveryOrder();
  const form = useCheckoutForm();

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      const order = await fetchOrdersPost(data);
      toast.error(`Заказ успешно оформлен! \n 📝 Ваш заказ ${order?.count}`, {
        icon: "✅",
      });

      setTimeout(() => {
        if (order) {
          location.href = order.url;
        }
      }, 3000);
    } catch (err) {
      setSubmitting(false);
      toast.error("Не удалось создать заказ", {
        icon: "❌",
      });
    }
  };
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className="mt-10 max-xl:px-5">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[30px] max-sm:text-center"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10 max-xl:p-2 max-lg:block">
            {/* Левая часть */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />

              {edit ? (
                <CheckoutDeliveryInForm
                  setEdit={setEdit}
                  deliveryData={deliveryData}
                />
              ) : (
                <CheckoutButtonAddress
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />
              )}

              <ChechoutTimeDelivery deliveryData={deliveryData} />
            </div>
            {/* Правая часть */}

            <div className="w-[450px] max-xl:w-[400px] max-lg:w-full">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Page;
