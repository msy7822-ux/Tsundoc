"use client";

import { AiOutlineAppstoreAdd } from "react-icons/ai";

type Props = {
  isDisabled: boolean;
  handleOnClick: () => void;
};

export function RegisterButton({ handleOnClick, isDisabled }: Props) {
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
        <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
      </span>
    </button>
  );
}
