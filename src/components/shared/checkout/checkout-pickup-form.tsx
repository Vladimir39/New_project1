import { FC } from "react";
import { FormRadioGroup, FormTextarea } from "../form-components";

export const CheckoutPickupForm: FC = () => {
  return (
    <>
      <FormRadioGroup
        name={[
          "г. Химки, пр-т Юбилейный, 33/2, стр.1",
          "г. Химки, пр-т Мельникова, 2Б, стр.1",
        ]}
      />
    </>
  );
};
