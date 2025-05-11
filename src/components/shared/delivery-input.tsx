import React, { FC } from "react";
import { ChoiceDeliveryInput } from "./choice-delivery-modal/choice-delivery-input";

interface Props {
  className?: string;
}

export const DeliveryInput: FC<Props> = ({ className }) => {
  return <ChoiceDeliveryInput />;
};
