"use client";
import React, { FC } from "react";
import { useProductID } from "../../../shared/hooks/useProductID";
import { ChooseProductFrom } from "./choose-product-form";
import { useCartStore } from "../../../shared/store/cart";
import toast from "react-hot-toast";

interface Props {
  id: string;
}
export const ProductForm: FC<Props> = ({ id }) => {
  const { productID } = useProductID({ id });
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
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.log(error);
    }
  };

  return (
    <ChooseProductFrom
      name={productID?.name}
      images={productID?.images}
      price={productID?.price}
      ingredients={productID?.ingredients}
      description={productID?.id}
      onSubmit={onAddProduct}
      loading={loading}
    />
  );
};
