"use client";

import { useRouter } from "next/navigation";

export function CreateBookButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="bg-main py-3 px-5 text-white shadow-md rounded-[6px]"
      onClick={() => router.push("/book/create")}
    >
      書籍を登録する
    </button>
  );
}
