import type { ReactNode } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Props = {
  className?: string;
  icon?: boolean;
  /** Text before the number, e.g. "Call". Pass `children` to replace the label entirely. */
  prefix?: string;
  children?: ReactNode;
};

export default function CallLink({ className, icon, prefix, children }: Props) {
  return (
    <a className={className} href={`tel:${PHONE_TEL}`}>
      {icon && <PhoneIcon />}
      {children ?? (
        <>
          {prefix && `${prefix} `}
          <span>{PHONE_DISPLAY}</span>
        </>
      )}
    </a>
  );
}
