"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

interface Props {
  name: string[];
  className?: string;
}

export const FormRadioGroup: FC<Props> = ({ name }) => {
  const [activeTime, setActiveTime] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [activePoint, setActivePoint] = useState<string | null>(null);

  const errorText = errors["address"]?.message as string;

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 10 && hours < 23) {
      setActiveTime(false);
    } else {
      setActiveTime(true);
    }
  }, []);

  useEffect(() => {
    setValue("address", null);
  }, [setValue]);

  const activeHandler = (type: string) => {
    setValue("house", "стр.1");
    setValue("address", type, { shouldValidate: true });
    setActivePoint(type);
  };

  return (
    <div className="flex flex-col gap-5 mt-10">
      <RadioGroup defaultValue="comfortable">
        {name.map((name: string, index) => (
          <div key={index} className="flex items-center space-x-2 ">
            <RadioGroupItem
              disabled={
                name === "г. Химки, пр-т Юбилейный, 33/2, стр.1"
                  ? activeTime
                  : false
              }
              value={name}
              id={name}
              className={`bg-white ${
                activePoint === name ? "border-red-500 border-2" : " "
              }  ${
                activeTime === true &&
                name === "г. Химки, пр-т Юбилейный, 33/2, стр.1"
                  ? "overflow-hidden bg-zinc-100"
                  : "hover:border-red-500"
              }`}
              onClick={() => activeHandler(name)}
              {...register("address", { required: true })}
            />
            <Label
              htmlFor={name}
              className={`flex text-base max-[500px]:text-sm text-balance cursor-pointer ${
                activeTime === true &&
                name === "г. Химки, пр-т Юбилейный, 33/2, стр.1"
                  ? "text-zinc-200"
                  : ""
              }`}
            >
              <MapPin className="mr-4 max-[500px]:mr-1 max-[360px]:hidden" />
              {name}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {errorText && (
        <ErrorText text={"Укажите адрес самовывоза"} className="mb-2" />
      )}
    </div>
  );
};
