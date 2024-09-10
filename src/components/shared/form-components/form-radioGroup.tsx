"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin } from "lucide-react";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

interface Props {
  name: string[];
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormRadioGroup: FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const [active, setActive] = useState<string | null>(null);

  const errorText = errors["address"]?.message as string;
  console.log(errorText);

  const activeHandler = (type: string) => {
    setValue("address", type, { shouldValidate: true });
    setActive(type);
  };

  return (
    <div className="flex flex-col gap-5 mt-10">
      <RadioGroup defaultValue="comfortable">
        {name.map((name: string) => (
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value={name}
              id={name}
              className={`${active === name ? "border-red-500" : " "}`}
              onClick={() => activeHandler(name)}
              {...register("address")}
            />
            <Label htmlFor={name} className="flex text-base">
              <MapPin className="mr-4" />
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
