import { FC, useEffect } from "react";
import { AddressInput } from "../address-input";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";
import { FormInput } from "../form-components";

export const ChoiceDeliver: FC = () => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    setValue("entrance", "");
    setValue("floor", "");
    setValue("home", "");
    setValue("flat", "");
  }, []);

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
        <FormInput name="flat" className="text-base" placeholder="Квартира" />
        <FormInput
          name="entrance"
          className="text-base"
          placeholder="Подъезд"
        />
        <FormInput name="code" className="text-base" placeholder="Код двери" />
        <FormInput name="floor" className="text-base" placeholder="Этаж" />
      </div>
    </div>
  );
};
