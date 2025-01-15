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

  const scrollYAdaptive = categories.map((item) => item.name);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(2);

    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.offsetTop - window.innerHeight / 3.7;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (scrollYAdaptive[activeCategoryId]) {
      const activeLink = document.querySelector(
        `a[href="/#${scrollYAdaptive[activeCategoryId]}"]`
      );

      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCategoryId, scrollYAdaptive]);

  const activeLinkClass = "bg-white shadow-md shadow-gray-200 text-primary";
  const linkClass = "flex items-center font-bold h-10 rounded-2xl px-3";

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
          {categories.length > 0 ? (
            categories.map(({ id, name }, index) => (
              <a
                className={cn(
                  linkClass,
                  activeCategoryId === id && activeLinkClass
                )}
                href={`/#${name}`}
                key={index}
                onClick={handleAnchorClick}
              >
                <button className={cn("text-sm whitespace-nowrap", className)}>
                  {name}
                </button>
              </a>
            ))
          ) : (
            <p className="text-gray-500">Нет категорий</p>
          )}
        </div>
        {hasCart && <CartButton className="h-12" />}
      </Container>
    </div>
  );
};
