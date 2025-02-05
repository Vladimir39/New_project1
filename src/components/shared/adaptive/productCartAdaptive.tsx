"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Title } from "../title";
import { Button } from "@/components/ui";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  categoryName: string;
  price: number;
  imageUrl: string;
  availability: boolean;
  className?: string;
}

export const ProductCardAdaptive: FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  availability,
  className,
}) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 11 && hours <= 23) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, []);

  return (
    <article
      className={`${
        availability === true && active === true
          ? `opacity-30 pointer-events-none`
          : ""
      }`}
    >
      <Link href={`/product/${id}`}>
        <div className="flex">
          <div className="flex rounded-lg ">
            <Image
              className="rounded-lg "
              width={150}
              height={100}
              src={imageUrl}
              alt={name}
              loading="lazy"
            />
          </div>

          <div className="relative ml-6 h-[50px] w-[150px]">
            <Title text={name} size="xs" className=" font-bold " />
            <Button variant="secondary" className="absolute top-14 text-base ">
              {availability === true && active === true ? (
                ""
              ) : (
                <Plus size={20} className="mr-1" />
              )}
              {availability === true && active === true ? (
                "C 11:00"
              ) : (
                <span className="text-[14px] rounded-sm p-1 ml-2 text-black">
                  <b>{price} ₽</b>
                </span>
              )}
            </Button>
          </div>
        </div>
      </Link>
      <hr className="mt-5" />
    </article>
  );
};
