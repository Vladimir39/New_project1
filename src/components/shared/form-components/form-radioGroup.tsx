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
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [activePoint, setActivePoint] = useState<string | null>(null);

  const errorText = errors["address"]?.message as string;

  useEffect(() => {
    setValue("address", null);
  }, []);

  const activeHandler = (type: string) => {
    setValue("address", type, { shouldValidate: true });
    setActivePoint(type);
  };

  return (
    <div className="flex flex-col gap-5 mt-10">
      <RadioGroup defaultValue="comfortable">
        {name.map((name: string, index) => (
          <div key={index} className="flex items-center space-x-2 ">
            <RadioGroupItem
              value={name}
              id={name}
              className={`${activePoint === name ? "border-red-500" : " "}`}
              onClick={() => activeHandler(name)}
              {...register("address", { required: true })}
            />
            <Label
              htmlFor={name}
              className="flex text-base w-4/5 max-[500px]:text-sm text-balance cursor-pointer"
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
