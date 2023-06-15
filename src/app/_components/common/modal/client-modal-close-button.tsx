"use client";

import { IoMdClose } from "react-icons/io";

export function ClientModalCloseButton({ close }: { close: () => void }) {
  return (
    <button
      className="
        absolute right-0 top-2 p-2
        text-lg sm:top-3 sm:px-4 sm:text-2xl
      "
      onClick={() => {
        close();
      }}
    >
      <IoMdClose></IoMdClose>
    </button>
  );
}
