import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/LOGO.svg" width={55} height={55} alt="Лого" />
          <div>
            <h1 className="text-2xl uppercase from-black">Дым шашлык</h1>
            <p className="text-sm text-gray-400 leading-3">
              Любовь с первого шампура
            </p>
            <p className="text-sm text-gray-400 leading-4">
              Круглосуточно <span className="text-red-400">24/7</span>
            </p>
          </div>
        </div>
        <div>
          <Button variant="outline" className="flex items-center gap-1">
            <ShoppingCart size={16} />
            Корзина
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
