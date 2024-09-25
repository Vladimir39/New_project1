"use client";
import { FC } from "react";

import toast from "react-hot-toast";
import { useCartStore } from "../../../../shared/store/cart";
import { ChooseProductFromAdaptiv } from ".";
import { useProductID } from "../../../../shared/hooks/useProductID";

interface Props {
  id: string;
  onSubmit?: VoidFunction;
}
export const ProductFormAdaptiv: FC<Props> = ({ id, onSubmit: _onSumbit }) => {
  const { productID } = useProductID({ id });
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productID?: number, ingredients?: number[]) => {
    try {
      addCartItem({
        productId: productID,
        ingredient: ingredients,
      });
      toast.success("Продукт добавлен в корзину");

      _onSumbit?.();
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.log(error);
    }
  };

  return (
    <ChooseProductFromAdaptiv
      name={productID?.name}
      images={productID?.images}
      price={productID?.price}
      ingredients={productID?.ingredients}
      description={productID?.id}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
