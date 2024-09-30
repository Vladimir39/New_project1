import { cn } from "@/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return (
    <h2 className={cn("font-bold max-sm:text-sm", className)}>{value} ₽</h2>
  );
};
