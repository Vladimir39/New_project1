import React, { FC, useEffect, useState } from "react";
import { WhiteBlock } from "../white-block";
import { useTimeDelivery } from "../../../../shared/hooks/useTimeDelivery";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  className?: string;
}

export const ChechoutTimeDelivery: FC<Props> = ({ className }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [activePoint, setActivePoint] = useState<string | null>(null);
  useEffect(() => {
    setValue("time", null);
  }, []);
  const options = useTimeDelivery(15, 10);
  const errorText = errors["time"]?.message as string;
  const activeHandler = (type: string) => {
    console.log(type);
    setValue("time", type, { shouldValidate: true });
    setActivePoint(type);
  };
  return (
    <WhiteBlock title="4. Время доставки" className={className}>
      <div>
        <RadioGroup
          defaultValue="comfortable"
          className=" grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-[530px]:grid-cols-2 max-[370px]:gap-1 max-[360px]:grid-cols-1"
        >
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => activeHandler(item)}
              className="flex justify-center items-center "
            >
              <RadioGroupItem
                value={item}
                className={`${
                  activePoint === item ? "border-red-500" : " "
                } max-w-[130px] h-[40px]  cursor-pointer border m-1 text-center rounded-md `}
                {...register("time", { required: true })}
              />
              <Label
                htmlFor={item}
                className="flex text-base w-[130px] max-[120px]:text-sm text-balance cursor-pointer justify-center"
              >
                {item}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {/* <TimePicker/> */}
      </div>
      {errorText && (
        <ErrorText text={"Укажите время доставки"} className="mb-2" />
      )}
    </WhiteBlock>
  );
};
