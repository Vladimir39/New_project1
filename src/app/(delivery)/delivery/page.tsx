import { Container, DeliveryInput } from "@/components/shared";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[url('/FonDH.jpg')] h-screen">
      <Container>
        <div className="text-white text-center mt-40 mb-10 max-[700px]:mb-0 max-[700px]:mt-5">
          <div className="flex justify-center gap-5 max-[700px]:flex-col  max-[700px]:place-items-center">
            <Image
              src="/LOGOWhite.svg"
              alt="logo"
              width={100}
              height={100}
              className="max-[700px]:w-[70px]"
            />
            <h1 className="text-[80px] font-[Anton] font-bold tracking-widest max-[900px]:text-[60px] max-[600px]:text-[40px] max-[400px]:text-[30px]">
              ДЫМ ШАШЛЫК
            </h1>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Lozung4.gif"
              alt="logo"
              width={500}
              height={100}
              className="w-[500px] h-[50px] max-[900px]:w-[400px] max-[900px]:h-[40px] max-[600px]:w-[300px] max-[600px]:h-[30px] max-[400px]:w-[200px] max-[400px]:h-[20px]"
            />
          </div>
        </div>
        <DeliveryInput />
      </Container>
    </div>
  );
};

export default Page;
