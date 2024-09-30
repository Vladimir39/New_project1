import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { ProductSous } from "./product-sous";

import { Button } from "../ui";
import { useSet } from "react-use";
import { calcProductPrices } from "@/lib/calc-Product-Prices";
import { Title } from "./title";

interface Props {
  name?: string;
  images?: string;
  price?: number;
  ingredients?: Iingredients[];
  description?: number;
  loading?: boolean;
  onSubmit: (productID: number, ingredients: number[]) => void;
  className?: string;
}
export const ChooseProductSlugForm: FC<Props> = ({
  className,
  name,
  images,
  price,
  ingredients,
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
    onSubmit(description as number, Array.from(selectedIngredients));
  };

  return (
    <div className={cn("flex flex-1 max-md:block", className)}>
      <div className="flex justify-center items-center flex-1 relative w-full max-sm:px-4">
        <img
          src={images}
          width={550}
          alt={name}
          className="relative translate-all z-10 duration-300 "
        />
      </div>
      <div className="max-w-[700px] p-7 max-xl:max-w-[500px] max-lg:max-w-[400px] max-md:max-w-[600px]">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <span className="font-bold">Цена: {price} ₽</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ea
          tenetur dolorum blanditiis incidunt, voluptatibus iste hic enim, optio
          vitae quas, vero id rem neque pariatur. Sint quae repudiandae optio?
        </p>
        <Title
          text="Добавить к блюду"
          size="xs"
          className="font-extrabold mt-12"
        />
        <div className="p-5 rounded-md h-[400px] overflow-auto scrollbar mt-1 max-xl:h-[470px] max-lg:h-[600px] max-md:h-[470px]">
          <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-3">
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
