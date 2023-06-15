"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export function LogoutButtonComponent() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <>
      <button
        type="button"
        className="
          flex w-full items-center justify-center gap-2
          rounded-md border px-8 py-2 text-main shadow-sm"
        onClick={() => {
          signOut();
          router.push("/");
        }}
      >
        <FiLogOut fontSize={20} />
        Logout
      </button>
    </>
  );
}
