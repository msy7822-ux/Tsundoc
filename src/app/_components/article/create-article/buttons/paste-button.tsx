"use client";

import { BiPaste } from "react-icons/bi";

type Props = {
  isDisabled: boolean;
  handleOnClick: () => void;
};

export function PasteButton({ isDisabled, handleOnClick }: Props) {
  return (
    <button
      type="button"
      className="
        flex w-full flex-col
        items-center justify-center rounded-md
        border p-8 text-center
      "
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      <span className="flex items-center gap-5">
        <BiPaste size={16}></BiPaste>
        <span className="text-xs">ペースト</span>
      </span>
    </button>
  );
}
