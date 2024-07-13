import {
  Categories,
  Container,
  ProductGroupList,
  Title,
} from "@/components/shared";

const Home = () => {
  return (
    <>
      <Container className="mt-10">
        <Title text="Еда" size="lg" className="font-extrabold" />
      </Container>
      <Categories />
      <Container className="mt-10">
        <div className="flex flex-col gap-16">
          <ProductGroupList
            title="Популярные"
            items={[
              {
                id: 1,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 2,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 3,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 4,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 5,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
            ]}
            categoryId={1}
          />
          <ProductGroupList
            title="Сеты"
            items={[
              {
                id: 1,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 2,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 3,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 4,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
              {
                id: 5,
                name: "Шашлык",
                price: 550,
                imageUrl:
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
              },
            ]}
            categoryId={2}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
