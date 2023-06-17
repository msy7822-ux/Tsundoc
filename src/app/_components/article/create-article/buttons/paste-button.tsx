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
      <span className="inline-block">
        <BiPaste size={16}></BiPaste>
      </span>
    </button>
  );
}
