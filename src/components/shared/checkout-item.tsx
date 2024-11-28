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
  const [side, setSide] = React.useState<boolean>(true);

  React.useEffect(() => {
    setSide(window.innerWidth < 640 ? true : false);
  }, []);

  return (
    <>
      {side ? (
        <div className="border p-2 rounded-lg">
          <div className="flex  gap-5 flex-1">
            <div className="flex  gap-5 flex-1">
              <CartItemDetailsImage src={imageUrl} />
              <CartItemInfo name={name} details={details} />
            </div>
            <div>
              <button onClick={onClickRemove}>
                <X
                  className="text-gray-200 cursor-pointer hover:text-gray-400"
                  size={20}
                />
              </button>
            </div>
          </div>
          <hr className="my-2" />

          <div className="flex items-center gap-5 justify-between">
            <CartItemDetailsPrice value={price} />
            <CartItemDetailsCountButton
              onClick={onClickCountButton}
              value={quantity}
            />
          </div>

          <div className=" bg-slate-50 "></div>
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center justify-between max-sm:block",
            className
          )}
        >
          <div className="flex items-center gap-5 flex-1 max-sm:justify-between">
            <CartItemDetailsImage
              src={imageUrl}
              className="max-sm:w-[130px] max-sm:h-[100px]"
            />
            <CartItemInfo name={name} details={details} />
          </div>
          <CartItemDetailsPrice value={price} />
          <div className="flex items-center gap-5 ml-20 ">
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
      )}
    </>
  );
};
