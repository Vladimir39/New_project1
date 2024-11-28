import { FC } from "react";
import { FormTextarea } from "../form-components";
import { AddressInput } from "../address-input";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";
import { Input } from "@/components/ui";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  console.log(control);

  return (
    <div className="flex flex-col gap-5 mt-10">
      <Controller
        control={control}
        name="address"
        render={({ field, fieldState: { error } }) => (
          <>
            <AddressInput onChange={field.onChange} />
            {error?.message && <ErrorText text={error.message} />}
          </>
        )}
      />
      <div className="grid grid-cols-2 gap-5 ">
        <Input name="entrance" className="text-base" placeholder="Подъезд" />
        <Input name="floor" className="text-base" placeholder="Этаж" />
      </div>

      <FormTextarea
        name="comment"
        className="text-base"
        placeholder="Комментарий к заказу"
      />
    </div>
  );
};
