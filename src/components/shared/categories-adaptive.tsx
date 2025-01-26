"use client";

import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import { cn } from "../../lib/utils";
import { Container } from "./container";
import { useCategoryStore } from "../../../shared/store/category";
import { useCategoryNav } from "../../../shared/hooks/useCategory";
import { CartButton } from "./cartButton";

interface Props {
  className?: string;
  hasCart?: boolean;
}

export const CategoriesAdaptive: FC<Props> = ({
  className,
  hasCart = true,
}) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  const { categories } = useCategoryNav();

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && categories[activeCategoryId]) {
      swiperRef.current.slideTo(activeCategoryId - 1);
    }
  }, [activeCategoryId, categories]);

  const activeLinkClass = "text-primary";
  const linkClass = "flex items-center font-bold h-10 ";

  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex justify-between gap-2 max-xl:ml-5">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2.2,
            },
            360: {
              slidesPerView: 3.5,
            },
            550: {
              slidesPerView: 4.5,
            },
            750: {
              slidesPerView: 5.5,
            },
            850: {
              slidesPerView: 7.5,
            },
            950: {
              slidesPerView: 10,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map(({ id, name }) => (
            <SwiperSlide key={id}>
              <a
                className={cn(
                  "flex justify-center mx-5",
                  linkClass,
                  activeCategoryId === id && activeLinkClass
                )}
                href={`/#${name}`}
                key={id}
              >
                <button className={cn("text-sm whitespace-nowrap ", className)}>
                  {name}
                </button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        {hasCart && <CartButton className="h-12" />}
      </Container>
    </div>
  );
};
