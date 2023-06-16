"use client";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  classNames?: string;
};

const baseStyle = "relative p-3 border"

export function NormalButton({
  text,
  type = "button",
  classNames = "",
}: Props) {
  return (
    <button type={type} className={twMerge(baseStyle, classNames)}>
      {text}
    </button>
  );
}
