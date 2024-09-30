import { Container, Footer, Header } from "../../components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дым шашлык | Корзина",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Header hasCart={false} className="border-b-gray-200" />
      <Container>{children}</Container>
      <Footer className="text-white" />
    </main>
  );
}
