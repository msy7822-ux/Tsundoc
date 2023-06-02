"use client";

import { useClerk } from "@clerk/nextjs";
import { FiLogOut } from "react-icons/fi";

export function LogoutButtonComponent() {
  const { signOut } = useClerk();

  return (
    <>
      <button
        type="button"
        className="
          text-main flex items-center gap-2 border
          shadow-sm py-2 px-8 rounded-md"
        onClick={() => {
          signOut();
        }}
      >
        <FiLogOut fontSize={20} />
        Logout
      </button>
    </>
  );
}
