"use client";

import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",
  variants: {
    color: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
    size: {
      small: "p-2 text-sm",
      base: "p-4 text-base",
      large: "p-6 text-lg",
    },
    disable: {
      true: "pointer-events-none opacity-20",
    },
  },
});

type Props = {
  text: string;
  isDsiabled?: boolean;
};

export function BaseButton({ text, isDsiabled = false }: Props) {
  return <button className={button({ disable: isDsiabled })}>{text}</button>;
}
