import React, { FC } from "react";
import { useSet } from "react-use";
import { calcProductPrices } from "@/lib/calc-Product-Prices";
import { Title } from "../title";
import { cn } from "@/lib/utils";
import { ProductSous } from "../product-sous";
import { Button } from "@/components/ui";
import { ChevronDown } from "lucide-react";
import { ProductSousAdaptive } from "./productSousAdaptive";

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

export const ChooseProductFromAdaptiv: FC<Props> = ({
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
    <div className={cn("px-6 static", className)}>
      <div className="absolute top-2 left-2 border w-[35px] h-[35px] drop-shadow-md rounded-[18px] z-50 bg-white">
        <ChevronDown className="m-auto mt-1" />
      </div>
      <div className="h-5/6 overflow-auto scrollbar pb-24 ">
        <div className="m-auto mb-6 max-w-[300px]  bg-[#131313]">
          <img
            src={images}
            width={550}
            alt={name}
            className="relative translate-all z-10 duration-300"
          />
        </div>
        <div className="m">
          <Title text={name} size="md" className="font-extrabold mb-1" />
        </div>

        <Title
          text="Добавить к блюду"
          size="xs"
          className="font-extrabold mt-5"
        />

        <div className="mt-5 overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients?.map((item, index) => (
              <ProductSousAdaptive
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
      <div className="absolute bottom-0 left-0 right-0 z-50 w-full">
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