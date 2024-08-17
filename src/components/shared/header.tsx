import { cn } from "../../lib/utils";
import { FC } from "react";
import Image from "next/image";
import { Container } from "./container";
import { CartButton } from "./cartButton";
import { CallButtonTel } from "./callBattonTel";
import Link from "next/link";


interface Props {
  className?: string;
  hasCart: boolean
}

export const Header: FC<Props> = ({ className, hasCart = true }) => {

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/LOGO.svg" width={90} height={90} alt="Лого" />
            <div>
              <h1 className="text-3xl uppercase font-black">Дым шашлык</h1>
              <p className="text-base text-gray-400 leading-2">
                Любовь с первого шампура
              </p>
              <p className="text-base text-gray-400 leading-4">
                Круглосуточно <span className="text-red-400">24/7</span>
              </p>
            </div>
          </div>
        </Link>

        <CallButtonTel />
        {hasCart&&<CartButton />}
      </Container>
    </header>
  );
};
