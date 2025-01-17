"use client";

import { cn } from "../../lib/utils";
import { FC, useEffect } from "react";
import { Container } from "./container";
import { useCategoryStore } from "../../../shared/store/category";
import { useCategoryNav } from "../../../shared/hooks/useCategory";
import { CartButton } from "./cartButton";

interface Props {
  className?: string;
  hasCart?: boolean;
}

export const Categories: FC<Props> = ({ className, hasCart = true }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  const { categories } = useCategoryNav();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(2);

    if (!targetId) return;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      console.log(targetPosition);

      const offset = window.innerHeight / 3.7;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // ПОПРАВИТЬ, ЧТОБЫ БЫЛО ЛУЧШЕ НАПИСАНО
  const scrollYAdaptive: string[] = [""];

  categories.map((item) => scrollYAdaptive.push(item.name));

  useEffect(() => {
    const activeLink = document.querySelector(
      `a[href="/#${scrollYAdaptive[activeCategoryId]}"]`
    );
    activeLink?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategoryId]);

  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 ",
        className
      )}
    >
      <Container className="flex justify-between gap-2 max-xl:ml-5 ">
        <div
          className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl hidden-scrollbar",
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
              onClick={handleAnchorClick}
            >
              <button className={cn("text-sm whitespace-nowrap", className)}>
                {name}
              </button>
            </a>
          ))}
        </div>
        {hasCart && <CartButton className="h-12" />}
      </Container>
    </div>
  );
};
