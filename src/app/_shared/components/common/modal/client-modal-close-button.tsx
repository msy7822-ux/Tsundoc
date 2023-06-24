"use client";

import { IoMdClose } from "react-icons/io";

export function ClientModalCloseButton({ close }: { close: () => void }) {
  return (
    <button
      className="
        absolute right-8 top-8 p-2
        text-lg sm:top-3 sm:px-4 sm:text-2xl
      "
      onClick={() => {
        close();
      }}
    >
      <IoMdClose size={20}></IoMdClose>
    </button>
  );
}
