"use client";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

export function ModalCloseButton() {
  const router = useRouter();
  return (
    <button
      className="absolute right-0 top-5 px-8 py-2"
      onClick={() => {
        router.back();
      }}
    >
      <IoMdClose fontSize={30}></IoMdClose>
    </button>
  );
}
