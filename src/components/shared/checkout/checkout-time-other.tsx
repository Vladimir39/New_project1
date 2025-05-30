import { Dispatch, FC } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface Props {
  className?: string;
  setActivePoint: Dispatch<string | null>;
  activePoint: string | null;
  setValue: UseFormSetValue<FieldValues>;
}

export const TimeOther: FC<Props> = ({
  className,
  setActivePoint,
  activePoint,
  setValue,
}) => {
  return (
    <div className="flex justify-center items-center">
      {activePoint !== "timeOther" ? (
        <input
          type="button"
          className="w-[130px] h-[40px] rounded-md cursor-pointer border text-center max-[360px]:w-full"
          value="Другое время"
          onClick={() => {
            setActivePoint("timeOther");
            setValue("time", "");
          }}
        />
      ) : (
        <input
          type="time"
          className="w-[130px] h-[40px] rounded-md cursor-pointer bg-red-500 text-center max-[360px]:w-full"
          onChange={(e) => {
            setValue("time", e.target.value, { shouldValidate: true });
          }}
        />
      )}
    </div>
  );
};
