import Link from "next/link";
import React, { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus, Star } from "lucide-react";

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
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <div className="flex justify-between items-center">
          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
          <div className="flex justify-between items-center">
            <Star size={15} />
            <b>100</b>
          </div>
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
