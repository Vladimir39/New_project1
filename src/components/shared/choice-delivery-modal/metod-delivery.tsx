import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface Props {
  activeDelivery: "delivery" | "pickup";
  className?: string;
  onClick: (method: "delivery" | "pickup") => void;
}

export const MetodDelivery: FC<Props> = ({
  onClick,
  activeDelivery,
  className,
}) => {
  const { register, setValue } = useFormContext();
  const [activeTab, setActiveTab] = useState("delivery");

  useEffect(() => {
    onClick("delivery");
    setValue("delivery", "Доставка");
  }, [setValue]);

  const handleValue = (metod: "delivery" | "pickup") => {
    setActiveTab(metod);
    onClick(metod);
    setValue("delivery", "delivery" === metod ? "Доставка" : "Самовывоз");
    setValue("address", "");
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-x-1 mt-4 relative text-white">
        <div
          className={styles.block}
          onClick={() => {
            handleValue("delivery");
          }}
          {...register("delivery", { required: true })}
        >
          <p
            className={
              activeTab === "delivery" ? `${className} text-white` : className
            }
          >
            Доставка
          </p>
        </div>
        <div
          className={styles.block}
          onClick={() => {
            handleValue("pickup");
          }}
          {...register("delivery", { required: true })}
        >
          <p
            className={
              activeTab === "delivery" ? className : `${className} text-white`
            }
          >
            Самовывоз
          </p>
        </div>
        <span
          style={{
            left: activeTab === "delivery" ? "0" : "50%",
          }}
          className={styles.active}
        ></span>
      </div>
    </>
  );
};
