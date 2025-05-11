import { useEffect } from "react";
import { useAddressStore } from "../store/address";
import { useRouter } from "next/router";

export const useAddress = async () => {
  const { loading, resAddress, fetchAddress } = useAddressStore();
  //const route = useRouter();

  console.log(resAddress);

  useEffect(() => {
    if (!resAddress) {
      fetchAddress();
    }
  }, [fetchAddress, resAddress]);

  //   useEffect(() => {
  //     if (!loading && !resAddress) {
  //       route.push("/delivery");
  //     }
  //   }, [loading, fetchAddress, resAddress]);

  return { loading, resAddress };
};
