import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  activeDelivery: "delivery" | "pickup";
  onClick: (method: "delivery" | "pickup") => void;
}

export const MetodDelivery: FC<Props> = ({ onClick, activeDelivery }) => {
  const { register, setValue } = useFormContext();

  const handleValue = (metod: "delivery" | "pickup") => {
    onClick(metod);
    setValue("delivery", "delivery" === metod ? "Доставка" : "Самовывоз");
    setValue("address", "");
  };

  return (
    <div className="flex justify-center gap-2">
      <div
        className={`w-2/6 flex flex-col items-center cursor-pointer border rounded-xl ${
          activeDelivery === "delivery"
            ? "border-rose-600 bg-rose-500 text-white"
            : "border-gray-300"
        }`}
        onClick={() => {
          handleValue("delivery");
        }}
        {...register("delivery", { required: true })}
      >
        <p className="flex items-center h-10 text-1xl">Доставка</p>
      </div>
      <div
        className={`w-2/6 flex flex-col items-center cursor-pointer border rounded-xl ${
          activeDelivery === "pickup"
            ? "border-rose-600 bg-rose-500 text-white"
            : "border-gray-300"
        }`}
        onClick={() => {
          handleValue("pickup");
        }}
        {...register("delivery", { required: true })}
      >
        <p className="flex items-center h-10 text-1xl">Самовывоз</p>
      </div>
    </div>
  );
};
