"use client";
import React, { FC } from "react";
import { Dialog, DialogContent } from "../../ui/dialog";

import { cn } from "../../../lib/utils";
import { useRouter } from "next/navigation";
import { useProductID } from "../../../../shared/hooks/useProductID";
import { ChooseProductFrom } from "../choose-product-form";
import { useCartStore } from "../../../../shared/store/cart";
import toast from "react-hot-toast";

interface Props {
  className?: string;
  id: string;
}

export const ChooseProductModal: FC<Props> = ({ id, className }) => {
  const { productID } = useProductID({ id });
  const router = useRouter();
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onAddProduct = async (productID: number, ingredients: number[]) => {
    try {
      addCartItem({
        productId: productID,
        ingredient: ingredients,
      });
      toast.success("Продукт добавлен в корзину");
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.log(error);
    }
  };

  return (
    <Dialog open={Boolean(id)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ChooseProductFrom
          name={productID?.name}
          images={productID?.images}
          price={productID?.price}
          ingredients={productID?.ingredients}
          description={productID?.id}
          onSubmit={onAddProduct}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
};
