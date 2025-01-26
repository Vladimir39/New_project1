import React, { FC } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CallButtonTel } from "./callBattonTel";
import { contact, pravoInfo } from "../../../shared/constant/footer.data";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn("border-t mt-10 bg-black h-50", className)}>
      <Container className="py-8 px-5 xl:px-0">
        <div className=" mb-6  lg:flex justify-between">
          <Title
            size="sm"
            text="ДЫМ ШАШЛЫК"
            className=" border-zinc-600 text-center tracking-widest font-bold mb-10 xl:text-3xl xl:border-r lg:pt-6 xl:pr-[6rem]"
          />
          <div className="gap-56 md:grid grid-cols-2 ">
            <div>
              <ul>
                {contact.items.map((item) => (
                  <li
                    key={item.title}
                    className="text-xs text-neutral-400 leading-5  md:text-left"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <CallButtonTel className="invert" />
            </div>
          </div>
        </div>
        <div>
          {pravoInfo.items.map((item) => (
            <Title
              key={item.title}
              size="ml"
              text={item.title}
              className="text-neutral-400"
            />
          ))}
        </div>
      </Container>
    </footer>
  );
};
