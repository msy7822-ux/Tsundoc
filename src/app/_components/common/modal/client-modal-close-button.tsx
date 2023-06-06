"use client";

import { IoMdClose } from "react-icons/io";

export function ClientModalCloseButton({ close }: { close: () => void }) {
  return (
    <button
      className="py-2 px-8 absolute top-5 right-0"
      onClick={() => {
        close();
      }}
    >
      <IoMdClose fontSize={30}></IoMdClose>
    </button>
  );
}
