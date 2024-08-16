import { cn } from "@/lib/utils";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return (
    <img
      className={cn("w-[75px] h-[60px] rounded-[5px]", className)}
      src={src}
    />
  );
};
