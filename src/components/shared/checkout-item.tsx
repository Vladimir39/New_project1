"use client";

import React, { FC } from "react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { cn } from "@/lib/utils";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { CartItemDetailsCountButton } from "./cart-item-details/cart-item-details-count-button";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}
export const CheckoutItem: FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickCountButton,
  onClickRemove,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>
      <CartItemDetailsPrice value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CartItemDetailsCountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button onClick={onClickRemove}>
          <X
            className="text-gray-200 cursor-pointer hover:text-gray-400"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
