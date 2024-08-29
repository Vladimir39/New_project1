import React, { FC } from "react";
import { WhiteBlock } from "./white-block";
import { Button, Skeleton } from "../ui";
import { ArrowRight} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <div className="flex my-4">
        <span>Стоимость товара</span>
      </div>
      <Button
        // asChild
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >

        Перейти к оплате
        

        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
