import React, { FC, useEffect, useState } from "react";
import { WhiteBlock } from "../white-block";
import { useTimeDelivery } from "../../../../shared/hooks/useTimeDelivery";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TimeOther } from "./index";
import { deliveryFormValues } from "./checkout-form-schema";

interface Props {
  deliveryData?: deliveryFormValues;
  className?: string;
}

export const ChechoutTimeDelivery: FC<Props> = ({
  className,
  deliveryData,
}) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [pointCafe, setPointCafe] = useState<number>(5);
  const [activeTime, setActiveTime] = useState<boolean>(false);

  useEffect(() => {
    const hours = new Date().getHours();
    if (deliveryData?.address === "г. Химки, пр-т Юбилейный, 33/2, стр.1") {
      if (hours > 22 || hours <= 9) {
        setPointCafe(0);
      } else if (hours > 23 || hours <= 10) {
        setActiveTime(true);
      } else {
        setPointCafe(5);
        setActiveTime(false);
      }
    }
  }, [deliveryData]);

  useEffect(() => {
    setValue("time", null);
  }, [setValue]);

  const options = useTimeDelivery(15, pointCafe);
  const errorText = errors["time"]?.message as string;

  const activeHandler = (type: string) => {
    setValue("time", type, { shouldValidate: true });
    setActivePoint(type);
  };

  return (
    <WhiteBlock
      title={`4. ${
        deliveryData?.delivery === "Доставка"
          ? "Время доставки:"
          : "К какому времени приготовить?"
      }`}
      className={className}
    >
      <div>
        <RadioGroup
          defaultValue="comfortable"
          className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-[530px]:grid-cols-2 max-[370px]:gap-1 max-[360px]:grid-cols-1"
        >
          {options.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <RadioGroupItem
                disabled={activeTime}
                id={`radio-${item}`}
                onClick={() => activeHandler(item)}
                value={item}
                className={`${
                  activePoint === item ? "bg-red-500" : ""
                } max-w-[130px] h-[40px] cursor-pointer border text-center rounded-md max-[360px]:max-w-full`}
              />
              <Label
                htmlFor={`radio-${item}`}
                className="flex text-base w-[130px] max-[120px]:text-sm text-balance cursor-pointer justify-center"
              >
                {item}
              </Label>
            </div>
          ))}
          <TimeOther
            setActivePoint={setActivePoint}
            activePoint={activePoint}
            setValue={setValue}
          />
        </RadioGroup>
      </div>
      {errorText && (
        <ErrorText text="Укажите время доставки" className="mb-2" />
      )}
    </WhiteBlock>
  );
};
