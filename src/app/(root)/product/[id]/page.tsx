import { Container, ProductForm } from "@/components/shared";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) {
    return notFound();
  }
  return (
    <Container className="my-10">
      <ProductForm id={id} slugProduct={true} />
    </Container>
  );
}
