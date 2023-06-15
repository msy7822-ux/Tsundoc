"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <div>Page Not Found</div>
      <button
        onClick={() => router.push("/")}
        className="rounded-md border px-4 py-2 text-sm"
      >
        トップページへ戻る
      </button>
    </div>
  );
}
