import { Header } from "../../components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дым шашлык | Главная",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Header className="border-gray-200" />
      {children}
    </main>
  );
}
