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
      <Container className="py-8">
        <div className="flex justify-between mb-6">
          <Title
            size="lg"
            text="ДЫМ ШАШЛЫК"
            className="border-r border-zinc-600 pr-[4rem] text-center tracking-widest font-bold pt-6"
          />
          <div className="grid grid-cols-2 gap-56">
            <div>
              <ul>
                {contact.items.map((item) => (
                  <li
                    key={item.title}
                    className="text-xs text-neutral-400 leading-5"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <CallButtonTel className="text-neutral-400 mt-5" />
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
