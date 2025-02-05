import { useEffect, useState } from "react";
import { IMenu } from "../types/menu.types";
import { Api } from "../services/api-client";

interface ReturnProps {
  categories: IMenu[];
  setDeliveryAddress: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const useCategoryNav = (): ReturnProps => {
  const [categories, setCategories] = useState<IMenu[]>([]);
  const [deliveryAddress, setDeliveryAddress] = useState<number | undefined>(
    () => {
      if (typeof window !== "undefined") {
        const x = window.localStorage.getItem("delivery");
        const y = x ? JSON.parse(x) : null;
        if (
          y?.delivery === "Самовывоз" &&
          y?.address === "г. Химки, пр-т Юбилейный, 33/2, стр.1"
        ) {
          return 0;
        } else {
          return 1;
        }
      }
    }
  );

  useEffect(() => {
    if (deliveryAddress === undefined) return;
    async function fetchCategories() {
      try {
        const category = await Api.categories.getAll(deliveryAddress);
        setCategories(category);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, [deliveryAddress]);
  return { categories, setDeliveryAddress };
};
