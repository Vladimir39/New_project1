import React, { FC } from "react";
import { WhiteBlock } from "../white-block";
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
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
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
    </WhiteBlock>
  );
};
