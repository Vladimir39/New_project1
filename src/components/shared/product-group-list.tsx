"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "../../lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "../../../shared/store/category";
import { ProductCardTest } from "./Product-cart-test";
import { ProductCardAdaptive } from "./adaptive";

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
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title
        text={title}
        size="lg"
        className="font-extrabold mb-5 max-sm:hidden"
      />

      <div
        className={cn(
          "grid grid-cols-1 gap-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-sm:gap-[15px]",
          listClassName
        )}
      >
        {items.map((product, i) => (
          <ProductCardTest
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.images}
            price={product.price}
            className="max-sm:hidden"
          />
        ))}
        {items.map((product, i) => (
          <ProductCardAdaptive
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.images}
            price={product.price}
            className="px-4 hidden max-sm:block"
          />
        ))}
      </div>
    </div>
  );
};
