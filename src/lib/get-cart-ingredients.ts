import { CartStateItem } from "../../shared/types/cart.types";

export const getCartIngredients = (
  ingredients: CartStateItem["ingredients"]
) => {
  const details = [];

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
