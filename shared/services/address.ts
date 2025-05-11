import { axiosInstance } from "./instance";

export const postAddress = async (address: string) => {
  return (await axiosInstance.post("/address", address)).data;
};
export const getAddress = async () => {
  return (
    await axiosInstance.get("/address", {
      withCredentials: true,
    })
  ).data;
};
