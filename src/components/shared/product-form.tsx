"use client";
import React, { FC } from "react";
import { useProductID } from "../../../shared/hooks/useProductID";
import { ChooseProductFrom } from "./choose-product-form";
import { useCartStore } from "../../../shared/store/cart";
import toast from "react-hot-toast";
import { ChooseProductSlugForm } from "./choose-product-slug-form";

interface Props {
  slugProduct?: boolean;
  onSubmit?: VoidFunction;
  close: () => void;
  id: string;
}
export const ProductForm: FC<Props> = ({
  id,
  onSubmit: _onSubmit,
  close,
  slugProduct,
}) => {
  const { productID } = useProductID({ id });
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  console.log(productID?.category.name);

  const onSubmit = async (productID: number, ingredients: number[]) => {
    try {
      addCartItem({
        productId: productID,
        ingredient: ingredients,
      });

      toast.success("Продукт добавлен в корзину");
      _onSubmit?.();
    } catch (error) {
      toast.error("Не удалось добавить продукт в корзину");
      console.log(error);
    }
  };

  if (slugProduct) {
    return (
      <ChooseProductSlugForm
        name={productID?.name}
        images={productID?.images}
        price={productID?.price}
        ingredients={productID?.ingredients}
        description={productID?.id}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductFrom
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
