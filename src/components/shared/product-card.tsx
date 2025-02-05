import Link from "next/link";
import React, { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center  rounded-lg h-[230px]">
          <Image
            width={290}
            height={215}
            className="w-[290px] h-[215px] rounded-lg"
            src={imageUrl}
            alt={name}
            loading="lazy"
          />
        </div>
        <div className="flex justify-between h-[66px] ">
          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
          {/* <div className="flex justify-between items-center">
            <Star size={15} />
            <b>100</b>
          </div> */}
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} ₽</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
