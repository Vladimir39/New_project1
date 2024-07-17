import { Header } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дым шашлык | Главная",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
