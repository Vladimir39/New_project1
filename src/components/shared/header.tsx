import { cn } from "../../lib/utils";
import { FC } from "react";
import Image from "next/image";
import { Container } from "./container";
import { CartButton } from "./cartButton";
import { CallButtonTel } from "./callBattonTel";
import Link from "next/link";
import { BurgerModal } from "./adaptive";

interface Props {
  className?: string;
  hasCart?: boolean;
}

export const Header: FC<Props> = ({ className, hasCart = true }) => {
  return (
    <header className={cn(" border-b ", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/LOGO.svg"
              width={60}
              height={60}
              alt="Лого"
              className="sm:w-[90px]"
            />
            <div>
              <h1 className="text-xl uppercase font-black sm:text-3xl">
                Дым шашлык
              </h1>
              <p className="text-xs text-gray-400 leading-2 sm:text-base">
                Любовь с первого шампура
              </p>
              <p className="text-xs text-gray-400 leading-4 sm:text-base">
                Круглосуточно <span className="text-red-400">24/7</span>
              </p>
            </div>
          </div>
        </Link>

        <div className="flex gap-2">
          <CallButtonTel className="hidden md:block" />
          <div className="md:hidden bg-secondary text-primary rounded-md px-2 pt-2 items-center hover:bg-secondary/50 ">
            <BurgerModal />
          </div>
        </div>
      </Container>
    </header>
  );
};
