import { FC } from "react";
import { FormTextarea } from "../form-components";
import { AddressInput } from "../address-input";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  const { control } = useFormContext();

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

      <FormTextarea
        name="comment"
        className="text-base"
        placeholder="Комментарий к заказу"
      />
    </div>
  );
};
