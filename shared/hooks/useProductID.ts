import { useEffect, useState } from "react";
import { IProduct } from "../types/product.types";
import { Api } from "../services/api-client";

interface ReturnProps {
  productID?: IProduct;
}

export const useProductID = (params: { id: string }): ReturnProps => {
  const [productID, setProductID] = useState<IProduct>();
  const [id] = useState<string>(params.id);
  useEffect(() => {
    async function fetchProductID() {
      try {
        const responce = await Api.products.getID({ id });
        setProductID(responce);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductID();
  }, [id]);
  return { productID };
};
