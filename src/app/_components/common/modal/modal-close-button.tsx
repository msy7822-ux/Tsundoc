"use client";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

export function ModalCloseButton() {
  const router = useRouter();
  return (
    <button
      className="py-2 px-8 absolute top-5 right-0"
      onClick={() => {
        router.back();
      }}
    >
      <IoMdClose fontSize={30}></IoMdClose>
    </button>
  );
}
