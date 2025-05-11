import { Footer, Header } from "../../components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кафе Дым Шашлык — Любовь с первого шампура",
  description:
    "Кафе Дым Шашлык в Химках предлагает вкуснейший шашлык, сочные люля-кебабы, ароматную шаурму и свежие салаты. Уютная атмосфера и лучшие блюда на углях ждут вас!",
  keywords: [
    "шашлык в Химках",
    "кафе Дым Шашлык",
    "люля-кебаб Химки",
    "шаурма на углях",
    "кафе Химки",
    "салаты",
    "вкусный шашлык",
  ],
  openGraph: {
    title: "Дым Шашлык — Любовь с первого шампура",
    description:
      "Попробуйте лучшие блюда на углях: сочный шашлык, люля-кебаб и шаурму в кафе Дым Шашлык в Химках!",
    url: "https://dimshashlik.ru",
    siteName: "Кафе Дым Шашлык",
    images: [
      {
        url: "/LOGO.svg",
        width: 1200,
        height: 630,
        alt: "Изображение для соцсетей",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Главная страница — Мой сайт",
  //   description: "Описание для Twitter карточки.",
  //   images: ["/path-to-image.jpg"],
  // },
  icons: {
    icon: "/LOGO.svg",
  },
  alternates: {
    canonical: "https://example.com/",
  },
  metadataBase: new URL("https://dimshashlik.ru"),
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
