"use client";

import {
  Categories,
  Container,
  ProductGroupList,
  Title,
} from "../../components/shared";
import { useCategoryNav } from "../../../shared/hooks/useCategory";

const Home = () => {
  const { categories } = useCategoryNav();

  return (
    <>
      <Container className="mt-5">
        <Title text="Все для вас" size="lg" className="font-extrabold" />
      </Container>
      <Categories />
      <Container className="mt-10">
        <div className="flex flex-col gap-16">
          {categories.map(
            (category) =>
              category.products.length > 0 && (
                <ProductGroupList
                  key={category.id}
                  title={category.name}
                  categoryId={category.id}
                  items={category.products}
                />
              )
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
