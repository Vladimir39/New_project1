import { useEffect, useState } from "react";
import { IMenu } from "../types/menu.types";
import { Api } from "../services/api-client";

interface ReturnProps {
  categories: IMenu[];
}

export const useCategoryNav = (): ReturnProps => {
  const [categories, setCategories] = useState<IMenu[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const category = await Api.categories.getAll();
        setCategories(category);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);
  return { categories };
};
