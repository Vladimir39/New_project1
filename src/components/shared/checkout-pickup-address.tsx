"use client";

import { FC } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const CheckoutPickupAddress: FC<Props> = ({
  className,
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        `border cursor-pointer bg-zinc-200 ${
          isActive ? "bg-white" : ""
        } hover:bg-red-500 hover:text-white`,
        className
      )}
    >
      <Title text={title} size="xs" className="font-bold text-center p-2" />
    </div>
  );
};
