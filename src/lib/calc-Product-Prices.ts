import { Iingredients } from "./../../shared/types/Ingredient.types";
export const calcProductPrices = (
  price?: number,
  ingredients?: Iingredients[],
  selectedIngredients?: Set<number>
) => {
  const totalIngredientsPrice = ingredients?
    .filter((ingredient) => selectedIngredients?.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return price + totalIngredientsPrice;
};
