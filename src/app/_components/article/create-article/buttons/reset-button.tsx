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
        block rounded-md
        border px-5 py-2
      "
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      <IoMdClose size={30}></IoMdClose>
    </button>
  );
}
