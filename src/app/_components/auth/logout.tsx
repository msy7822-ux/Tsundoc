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
          text-main flex items-center justify-center gap-2
          border shadow-sm py-2 px-8 rounded-md w-full"
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
