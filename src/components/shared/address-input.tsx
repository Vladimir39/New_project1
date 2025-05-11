"use client";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange: (value?: string) => void;
}
export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="23923b62535cf19fa8ff9a6303e2138eb3316e75"
      onChange={(data) => onChange?.(data?.value)}
      filterLocations={[{ region: "Москва" }, { city: "Химки" }]}
      filterFromBound="region"
      filterToBound="street"
      count={5}
      inputProps={{
        placeholder: "Город, улица",
        className:
          "h-12 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-primary",
      }}
    />
  );
};
