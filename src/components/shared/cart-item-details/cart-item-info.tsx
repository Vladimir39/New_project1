import { cn } from "@/lib/utils";

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="text-lg font-bold flex-1 leading-6 max-sm:text-sm">
          {name}
        </h2>
      </div>
      {details && (
        <div>
          <p className="text-xs text-gray-400 w-[90%]">
            Дополнительно: {`${details}`}
          </p>
          <hr />
          <p className="text-[10px] text-gray-400 w-[90%] mt-1">
            Соусы и мучное добавляются по одному
          </p>
        </div>
      )}
    </div>
  );
};
