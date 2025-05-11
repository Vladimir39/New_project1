import React from "react";

const DeliveryLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <main className="min-h-screen flex flex-col ">{children}</main>;
};

export default DeliveryLayout;
