import { Instagram, Smartphone } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
}

export const CallButtonTel: FC<Props> = ({ className }) => {
  return (
    <div>
      <div className="flex gap-2">
        <Smartphone size={25} />
        <ul className="flex gap-3">
          <li>
            <Link href="tel:+79659898988">+79659898988</Link>
          </li>
          <li>
            <Link href="tel:+79619797977">+79619797977</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-6 justify-center mt-1">
          <li>
            <Link href="#">
              <Instagram size={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Instagram size={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Instagram size={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Instagram size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
