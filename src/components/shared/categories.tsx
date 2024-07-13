"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import { useCategoryStore } from "../../../store/category";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Популярные" },
  { id: 2, name: "Сеты" },
  { id: 3, name: "Шашлык" },
  { id: 4, name: "Шаурма" },
  { id: 5, name: "Люля-кебаб" },
  { id: 6, name: "Рыба" },
  { id: 7, name: "Гарнир" },
  { id: 8, name: "Салаты" },
  { id: 9, name: "Выпечка" },
  { id: 10, name: "Соусы" },
  { id: 11, name: "Напитки" },
];

export const Categories: FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className
          )}
        >
          {cats.map(({ id, name }, index) => (
            <a
              className={cn(
                "flex items-center font-bold h-10 rounded-2xl px-3",
                activeCategoryId === id &&
                  "bg-white shadow-md shadow-gray-200 text-primary"
              )}
              href={`/#${name}`}
              key={index}
            >
              <button className={cn("text-sm", className)}>{name}</button>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};
