"use client";

import {
  Categories,
  Container,
  ProductGroupList,
} from "../../components/shared";
import { useCategoryNav } from "../../../shared/hooks/useCategory";

const Home = () => {
  const { categories } = useCategoryNav();

  return (
    <>
      <Categories />
      <Container className="mt-10 flex-auto">
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
