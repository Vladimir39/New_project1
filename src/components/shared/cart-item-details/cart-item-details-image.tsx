import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return (
    <Image
      alt="Product image"
      width={75}
      height={60}
      className={cn("w-[75px] h-[60px] rounded-[5px]", className)}
      src={src}
      loading="lazy"
    />
  );
};
