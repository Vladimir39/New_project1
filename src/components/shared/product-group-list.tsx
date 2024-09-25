"use client";

import React, { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "../../lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "../../../shared/store/category";

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
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div
        className={cn(
          "grid grid-cols-1 gap-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
          listClassName
        )}
      >
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
