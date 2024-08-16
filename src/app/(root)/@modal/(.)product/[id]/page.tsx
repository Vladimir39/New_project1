import { ChooseProductModal } from "../../../../../components/shared";

import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) {
    return notFound();
  }

  return <ChooseProductModal id={id} />;
}
