import React, { FC } from "react";
import { WhiteBlock } from "./white-block";
import { Button, Skeleton } from "../ui";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

export const CheckoutSidebar: FC<Props> = ({
  totalAmount,
  className,
  loading,
}) => {
  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">
            {totalAmount} ₽
          </span>
        )}
      </div>
      <div className="my-4">
        <p className="font-bold text-[14px]">Доставка от 1500 руб. БЕСПЛАТНО</p>
        <p className="text-[13px] mt-5">* в пределах 3км</p>
      </div>
      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Оформить заказ
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
