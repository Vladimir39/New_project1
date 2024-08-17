import { Container, Title, WhiteBlock } from "@/components/shared";
import { Button, Textarea } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[30px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">111223</WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>
        <div>
          <div className="w-[450px]">
            <WhiteBlock className="p-6 sticky top-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl">Итого:</span>
                <span className="text-[30px] font-extrabold">350 ₽</span>
              </div>
              <div className="flex my-4">
                <span>Стоимость товара</span>
              </div>
              <Button type='submit' className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                Перейти к оплате
                <ArrowRight className="w-5 ml-2"/>
              </Button>
            </WhiteBlock>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
