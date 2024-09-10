import { useState } from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutPickupAddress } from "../checkout-pickup-address";
import React, { FC } from "react";
import { CheckoutAddressForm } from "./checkout-address-form";
import { CheckoutPickupForm } from "./checkout-pickup-form";

interface Props {
  className?: string;
}

export const CheckoutButtonAddress: FC<Props> = ({ className }) => {
  const [active, setActive] = useState<"delivery" | "pickup">("delivery");

  const activeChangeHandler = (type: "delivery" | "pickup") => {
    setActive(type);
  };

  const address =
    active === "delivery" ? "3. Адрес доставки" : "3. Адрес ресторана";

  return (
    <WhiteBlock title={address} className={className}>
      <div className="grid grid-cols-2 rounded-xl h-10">
        <CheckoutPickupAddress
          title="Доставка"
          className="rounded-s-sm "
          isActive={active === "delivery"}
          onClick={() => activeChangeHandler("delivery")}
        />
        <CheckoutPickupAddress
          title="Самовывоз"
          className="rounded-e-sm"
          isActive={active === "pickup"}
          onClick={() => activeChangeHandler("pickup")}
        />
      </div>

      {active === "delivery" ? <CheckoutAddressForm /> : <CheckoutPickupForm />}
    </WhiteBlock>
  );
};
