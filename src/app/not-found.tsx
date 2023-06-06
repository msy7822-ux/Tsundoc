"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <div>Page Not Found</div>
      <button
        onClick={() => router.push("/")}
        className="border rounded-md py-2 px-4 text-sm"
      >
        トップページへ戻る
      </button>
    </div>
  );
}
