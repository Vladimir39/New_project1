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
  const [stateThreshold, setStateThreshold] = useState(0.4);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: stateThreshold,
  });
  const resize = useResize("(min-width:640px)", true);

  useEffect(() => {
    if (window.innerHeight < 730) {
      setStateThreshold(0.1);
    } else {
      setStateThreshold(0.4);
    }
  }, []);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <section className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5 " />

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
                imageUrl={product.images}
                price={product.price}
              />
            ))
          : items.map((product, i) => (
              <ProductCardAdaptive
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.images}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
};
