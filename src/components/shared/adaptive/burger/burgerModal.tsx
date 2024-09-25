"use client";

import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Instagram, Mail, MapPin, Menu, Smartphone } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const BurgerModal: FC<Props> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Menu />
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <h3 className="font-bold text-xl">Контакты</h3>
        <h6 className="text-slate-300">Наши социальные сети</h6>
        <div className="flex gap-6">
          <Link href="#">
            <Instagram size={40} />
          </Link>
          <Link href="#">
            <Instagram size={40} />
          </Link>
          <Link href="#">
            <Instagram size={40} />
          </Link>
          <Link href="#">
            <Instagram size={40} />
          </Link>
        </div>
        <hr />
        <h6 className="text-slate-300">точка 1</h6>
        <div className="flex gap-3">
          <MapPin />
          <p>г. Химки, Пр-т Юбилейный, 51, к.1</p>
        </div>
        <div className="flex gap-3">
          <Smartphone />
          <Link href="tel:+79659898988">+79659898988</Link>
        </div>
        <hr />
        <h6 className="text-slate-300">точка 2</h6>
        <div className="flex gap-3">
          <MapPin />
          <p>г. Химки, Пр-т Мельникова, 2Б, стр.1</p>
        </div>
        <div className="flex gap-3">
          <Smartphone />
          <Link href="tel:+79619797977">+79619797977</Link>
        </div>
        <hr />
        <h6 className="text-slate-300">Адрес электронной почты</h6>
        <div className="flex gap-3">
          <Mail />
          <Link href="mailto:admin@dimshashlik.ru">admin@dimshashlik.ru</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
