import Link from "next/link";
import React, { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCardTest: FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <article className={className}>
      <Link href={`/product/${id}`}>
        <div className="relative transition ease-in-out  hover:-translate-y-1 hover:scale-102  duration-300">
          <div className="flex justify-center rounded-lg h-[230px]">
            <img
              className="w-[290px] h-[215px] rounded-lg "
              src={imageUrl}
              alt={name}
            />
          </div>
          <div className="flex justify-between h-[50px] absolute bottom-12">
            <Title
              text={name}
              size="xs"
              className=" font-bold bg-gray-100 max-w-72 rounded-sm p-1 px-5 mt-3 text-center "
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="mt-3 ">
              <span className="text-[20px] rounded-sm p-1 ">
                <b>{price} ₽</b>
              </span>
            </div>
            <Button variant="secondary" className="text-base font-bold">
              <Plus size={20} className="mr-1" />
              Добавить
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
};
