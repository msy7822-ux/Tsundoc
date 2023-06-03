"use client";

import { useRouter } from "next/navigation";

type Props = {
  isDisplay: boolean;
};

export function CreateBookButton({ isDisplay }: Props) {
  const router = useRouter();

  if (!isDisplay) return null;

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
