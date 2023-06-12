"use client";

import { IoMdClose } from "react-icons/io";

export function ClientModalCloseButton({ close }: { close: () => void }) {
  return (
    <button
      className="
        py-2 sm:px-4 px-2 absolute
        sm:top-3 top-2 right-0 sm:text-2xl text-lg
      "
      onClick={() => {
        close();
      }}
    >
      <IoMdClose></IoMdClose>
    </button>
  );
}
