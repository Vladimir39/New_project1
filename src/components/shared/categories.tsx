"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import { useCategoryStore } from "../../../store/category";

import { useCategoryNav } from "../../../hooks/useCategory";

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  const { categories } = useCategoryNav();

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
          {categories.map(({ id, name }, index) => (
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
