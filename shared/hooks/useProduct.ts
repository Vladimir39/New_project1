import { useEffect, useState } from "react";
import { IProduct } from "../types/product.types";
import { Api } from "../services/api-client";

interface ReturnProps {
  product: IProduct[];
}

export const useProductItems = (): ReturnProps => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const responce = await Api.products.getAll();
        setProduct(responce);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);
  return { product };
};
