import { cn } from "../../lib/utils";
import React, { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { ProductSous } from "./product-sous";
import { Iingredients } from "../../../shared/types/Ingredient.types";
import { useSet } from "react-use";
import { calcProductPrices } from "@/lib/calc-Product-Prices";
import Image from "next/image";

interface Props {
  name?: string;
  images?: string;
  price?: number;
  ingredients?: Iingredients[];
  id?: number;
  description?: string;
  loading?: boolean;
  onSubmit: (productID: number, ingredients: number[]) => void;
  className?: string;
}

export const ChooseProductFrom: FC<Props> = ({
  className,
  name,
  images,
  price,
  ingredients,
  id,
  description,
  loading,
  onSubmit,
}) => {
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const totalPrice = calcProductPrices(
    typeof price === "number" ? price : 0,
    Array.isArray(ingredients) ? ingredients : [],
    selectedIngredients
  );

  const handleClickAdd = () => {
    onSubmit(id as number, Array.from(selectedIngredients));
  };

  const hasSemicolon = description?.includes(";");

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex justify-center items-center flex-1 relative w-full bg-[#131313]">
        <Image
          src={images || ""}
          width={550}
          height={550}
          alt={name || ""}
          className="relative translate-all z-10 duration-300 "
          loading="lazy"
        />
      </div>

      <div className="w-[510px] bg-[#f7f6f5] p-7 max-lg:w-[400px] flex flex-col justify-between">
        <div>
          <Title text={name} size="md" className="font-extrabold mb-1" />
          <span className="font-bold">Цена: {price} ₽</span>
        </div>
        <div className="mt-2">
          {hasSemicolon ? (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[13px] ">
              {description
                ?.split(";")
                .filter((item) => item.trim() !== "")
                .map((item, index) => (
                  <li key={index} className="">
                    {item.trim()}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-[16px] leading-5">{description}</p>
          )}
        </div>
        {ingredients?.length !== 0 ? (
          <div>
            <Title
              text="Добавить к блюду"
              size="xs"
              className="font-extrabold mt-5"
            />
            <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-1">
              <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2">
                {ingredients?.map((item, index) => (
                  <ProductSous
                    key={index}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onClick={() => addIngredient(item.id)}
                    active={selectedIngredients.has(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
