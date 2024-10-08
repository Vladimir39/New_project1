"use client";
import { FC } from "react";

import toast from "react-hot-toast";
import { useCartStore } from "../../../../shared/store/cart";
import { ChooseProductFromAdaptiv } from ".";
import { useProductID } from "../../../../shared/hooks/useProductID";
import { ChevronDown } from "lucide-react";

interface Props {
  id: string;
  close: () => void;
  onSubmit?: VoidFunction;
}
export const ProductFormAdaptiv: FC<Props> = ({
  id,
  onSubmit: _onSumbit,
  close,
}) => {
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
    <>
      <div
        className="absolute top-2 left-2 border w-[35px] h-[35px] drop-shadow-md rounded-[18px] z-50 bg-white"
        onClick={close}
      >
        <ChevronDown className="m-auto mt-1" />
      </div>
      <ChooseProductFromAdaptiv
        name={productID?.name}
        images={productID?.images}
        price={productID?.price}
        ingredients={productID?.ingredients}
        description={productID?.id}
        onSubmit={onSubmit}
        loading={loading}
      />
    </>
  );
};
