import { DataFooter } from "../types/footerData.types";
import { Instagram } from "lucide-react";

export const firstFooterMenu: DataFooter = {
  title: "Дым шашлык",
  items: [
    { title: "О нас", link: "/" },
    { title: "Блог", link: "/" },
    { title: "Блог1", link: "/" },
  ],
};

export const twoFooterMenu: DataFooter = {
  title: "Работа",
  items: [{ title: "О нас", link: "/" }],
};

export const freeFooterMenu: DataFooter = {
  title: "Партнерам",
  items: [
    { title: "Франшиза", link: "/" },
    { title: "Инвестиции", link: "/" },
    { title: "Поставщикам", link: "/" },
    { title: "Предложение по помещениям", link: "/" },
  ],
};

export const fourFooterMenu: DataFooter = {
  title: "Это интересно",
  items: [{ title: "Корпоративные заказы", link: "/" }],
};

export const contact: DataFooter = {
  title: "Контакты",
  items: [
    { title: "+79659898988", link: "tel:+79659898988" },
    {
      title: "Г. ХИМКИ, ПР-Т ЮБИЛЕЙНЫЙ, 33/2, СТР.1",
      link: "tel:+79659898988",
    },
    { title: "+79619797977", link: "tel:+79619797977" },
    { title: "Г. ХИМКИ, ПР-Т МЕЛЬНИКОВА, 2Б, СТР.1", link: "tel:+79619797977" },
    { title: "admin@dimshashlik.ru", link: "mailto:admin@dimshashlik.ru" },
  ],
};

export const contactPravoInfo: DataFooter = {
  title: "Прававая информация",
  items: [
    { title: "ДЫМ ШАШЛЫК - 2025", link: "/" },
    // { title: 'Правовая информация', link: '/' },
    // // { title: 'Калорийность и состав', link: '/' },
    // { title: 'Помощь', link: '/' }
  ],
};

export const pravoInfo: DataFooter = {
  title: "Прававая информация",
  items: [
    { title: "© 2025 “Дым шашлык”", link: "" },
    { title: "Копляков Сергей Михайлович, ИНН 391803344140", link: "" },
    { title: "г. Химки, пр-т Мельникова, 2Б, стр.1", link: "" },
  ],
};
