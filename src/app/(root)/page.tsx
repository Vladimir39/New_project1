"use client";

import {
  Categories,
  Container,
  ProductGroupList,
} from "../../components/shared";
import { useCategoryNav } from "../../../shared/hooks/useCategory";
import { ChoiceDeliveryModal } from "@/components/shared/choice-delivery-modal/choice-delivery-modal";
import { useResize } from "../../../shared/hooks/useResize";
import { CategoriesAdaptive } from "@/components/shared/categories-adaptive";
import { useAddressStore } from "../../../shared/store/address";
import { useAddress } from "../../../shared/hooks/useAddress";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { categories, setDeliveryAddress } = useCategoryNav();
  const { resAddress, loading, fetchAddress } = useAddressStore();
  const router = useRouter();

  useEffect(() => {
    fetchAddress();
  }, [fetchAddress]);

  useEffect(() => {
    if (!loading && !resAddress) {
      router.push("/delivery");
    }
  }, [resAddress, loading, fetchAddress]);

  console.log(resAddress);

  const resize = useResize("(min-width:990px)", true);

  return (
    <>
      {resize ? <Categories /> : <CategoriesAdaptive />}
      <Container className="mt-10 flex-auto max-sm-[400px]:px-5">
        <div className="flex justify-self-end">
          <ChoiceDeliveryModal setDeliveryAddress={setDeliveryAddress} />
        </div>
        <div className="flex flex-col gap-16">
          {categories.map(
            (category) =>
              category.products.length > 0 && (
                <ProductGroupList
                  key={category.id}
                  title={category.name}
                  categoryId={category.id}
                  items={category.products}
                  className="drop-shadow-md"
                />
              )
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
