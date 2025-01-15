import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { FormInput, FormTextarea } from "../form-components";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-2 gap-5 max-[500px]:grid-cols-1">
        <FormInput name="firstName" className="text-base" placeholder="Имя" />
        {/* <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        /> */}
        {/* <FormInput name="email" className="text-base" placeholder="E-mail" /> */}
        <FormInput name="phone" className="text-base" placeholder="Телефон" />
      </div>
      <FormTextarea
        name="comment"
        className="text-base"
        placeholder="Комментарий к заказу"
      />
    </WhiteBlock>
  );
};
