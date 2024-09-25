"use client";

import * as React from "react";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ProductFormAdaptiv } from "./productFormAdaptiv";

interface Props {
  id: string;
  className?: string;
}

export const ChooseProductAdaptivModule: React.FC<Props> = ({
  id,
  className,
}) => {
  const router = useRouter();

  return (
    <Drawer open={true} onOpenChange={() => router.back()}>
      <DrawerContent
        className={cn("p-0 h-svh bg-white overflow-hidden", className)}
      >
        <ProductFormAdaptiv id={id} onSubmit={() => router.back()} />
      </DrawerContent>
    </Drawer>
  );
};
