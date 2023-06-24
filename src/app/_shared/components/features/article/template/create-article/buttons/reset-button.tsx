"use client";

import { IoMdClose } from "react-icons/io";

type Props = {
  handleOnClick: () => void;
  isDisabled: boolean;
};

export function ResetButton({ handleOnClick, isDisabled }: Props) {
  return (
    <button
      type="button"
      className="
        block h-50 rounded-md
        border px-5 py-3
      "
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      <IoMdClose size={16}></IoMdClose>
    </button>
  );
}
