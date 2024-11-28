"use client";

import { ChooseProductAdaptivModule } from "@/components/shared/adaptive";
import { ChooseProductModal } from "../../../../../components/shared";

import { notFound } from "next/navigation";
import { useResize } from "../../../../../../shared/hooks/useResize";

export default function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const resize = useResize("(min-width:768px)", true);

  const modal = resize ? (
    <ChooseProductModal id={id} />
  ) : (
    <ChooseProductAdaptivModule id={id} />
  );

  if (!id) {
    return notFound();
  }

  return modal;
}
