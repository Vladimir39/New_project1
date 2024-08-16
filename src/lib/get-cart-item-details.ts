import { Iingredients } from "./../../shared/types/Ingredient.types";
export const getCartItemDetails = (ingredients?: Iingredients[]): string => {
  const details = [];
  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(", ");
};
