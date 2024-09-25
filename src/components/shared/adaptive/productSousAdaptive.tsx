import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

import React, { FC } from "react";

interface Props {
  name: string;
  price: number;
  imageUrl: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}

export const ProductSousAdaptive: FC<Props> = ({
  className,
  onClick,
  active,
  name,
  imageUrl,
  price,
}) => {
  return (
    <div
      className={cn(
        "flex items-center flex-col rounded-md w-24 text-center relative cursor-pointer shadow-md bg-white",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img src={`/${imageUrl}`} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
