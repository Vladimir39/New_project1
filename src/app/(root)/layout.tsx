import { Footer, Header } from "../../components/shared";
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
    <main className="min-h-screen flex flex-col ">
      <Header className="max-xl:px-5" />
      {children}
      {modal}
      <Footer className="text-white" />
    </main>
  );
}
