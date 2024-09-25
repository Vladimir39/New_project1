"use client";
import React, { FC } from "react";
import { Dialog, DialogContent } from "../../ui/dialog";

import { cn } from "../../../lib/utils";
import { useRouter } from "next/navigation";
import { ProductForm } from "../product-form";

interface Props {
  className?: string;
  id: string;
}

export const ChooseProductModal: FC<Props> = ({ id, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(id)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[900px] max-w-[900px] min-h-[400px] bg-white overflow-hidden max-lg:w-[730px] max-lg:max-w-[730px] max-lg:min-h-[400px]",
          className
        )}
      >
        <ProductForm id={id} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
