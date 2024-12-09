import { FC } from "react";
import { AddressInput } from "../address-input";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

export const ChoiceDeliver: FC = () => {
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
    </div>
  );
};
