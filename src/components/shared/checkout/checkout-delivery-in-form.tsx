import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { Pencil } from "lucide-react";
import { deliveryFormValues } from "./checkout-form-schema";

interface Props {
  className?: string;
  deliveryData?: deliveryFormValues;
  setEdit: (value: boolean) => void;
}

export const CheckoutDeliveryInForm: FC<Props> = ({
  className,
  setEdit,
  deliveryData,
}) => {
  const address =
    deliveryData?.delivery === "Доставка"
      ? "3. Адрес доставки"
      : `3. Адрес ресторана: ${deliveryData?.address}`;

  return (
    <WhiteBlock title={address} className={className}>
      <div className="flex justify-end mb-5">
        <div
          onClick={() => setEdit(false)}
          className="flex  gap-1 hover:text-primary cursor-pointer"
        >
          <Pencil className="w-3 h-5" />
          <p className="text-sm font-bold">изменить адрес</p>
        </div>
      </div>
      {deliveryData?.delivery === "Доставка" ? (
        <div className="font-bold flex flex-col gap-3">
          <p className="border text-center rounded-sm p-2">
            <span>Адрес: </span>
            {deliveryData?.address}
          </p>
          <div className="grid grid-cols-2 gap-5">
            {deliveryData?.house === "" ? null : (
              <p className="border text-center rounded-sm p-2">
                <span>Дом: </span> {deliveryData?.house}
              </p>
            )}
            {deliveryData?.flat === "" ? null : (
              <p className="border text-center rounded-sm p-2">
                <span>Квартира: </span> {deliveryData?.flat}
              </p>
            )}
            {deliveryData?.entrance === "" ? null : (
              <p className="border text-center rounded-sm p-2">
                <span>Подъезд: </span> {deliveryData?.entrance}
              </p>
            )}
            {deliveryData?.floor === "" ? null : (
              <p className="border text-center rounded-sm p-2">
                <span>Этаж: </span> {deliveryData?.floor}
              </p>
            )}
          </div>
        </div>
      ) : null}
    </WhiteBlock>
  );
};
