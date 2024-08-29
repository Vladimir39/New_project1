"use client";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { ClearButton } from "../clear-button";
import { Textarea } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormTextarea: FC<Props> = ({
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
  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>

      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <p className="text-red-500 text-sm mt-2">{errorText}</p>}
    </div>
  );
};
