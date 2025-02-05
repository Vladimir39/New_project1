"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "../../lib/utils";
import { useCategoryStore } from "../../../shared/store/category";
import { ProductCardTest } from "./Product-cart-test";
import { ProductCardAdaptive } from "./adaptive";
import { useResize } from "../../../shared/hooks/useResize";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  });
  const resize = useResize("(min-width:640px)", true);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId]);

  return (
    <section className={className} id={title} ref={intersectionRef}>
      <div ref={intersectionRef}>
        <Title text={title} size="lg" className="font-extrabold mb-5 " />
      </div>

      <div
        className={cn(
          "grid grid-cols-1 gap-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-sm:gap-[15px]",
          listClassName
        )}
      >
        {resize
          ? items.map((product, i) => (
              <ProductCardTest
                key={product.id}
                id={product.id}
                name={product.name}
                categoryName={title}
                availability={product.availability}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          : items.map((product, i) => (
              <ProductCardAdaptive
                key={product.id}
                id={product.id}
                name={product.name}
                categoryName={title}
                availability={product.availability}
                imageUrl={product.images}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
};
