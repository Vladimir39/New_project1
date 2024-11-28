"use client";

import { Categories, Container, ProductForm } from "@/components/shared";
import { CircleArrowLeft } from "lucide-react";
import { notFound, useRouter } from "next/navigation";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();

  if (!id) {
    return notFound();
  }
  return (
    <>
      <Categories />
      <Container className="my-10">
        <div
          className="flex w-40 cursor-pointer hover:text-primary"
          onClick={() => router.back()}
        >
          <CircleArrowLeft />
          <span className="ml-2 font-bold ">На главную</span>
        </div>
        <ProductForm id={id} slugProduct={true} close={() => router.back()} />
      </Container>
    </>
  );
}
