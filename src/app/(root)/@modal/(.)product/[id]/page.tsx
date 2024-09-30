"use client";

import { ChooseProductAdaptivModule } from "@/components/shared/adaptive";
import { ChooseProductModal } from "../../../../../components/shared";

import { notFound } from "next/navigation";

export default function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const modal =
    window.innerWidth < 768 ? (
      <ChooseProductAdaptivModule id={id} />
    ) : (
      <ChooseProductModal id={id} />
    );

  if (!id) {
    return notFound();
  }

  return modal;
}
