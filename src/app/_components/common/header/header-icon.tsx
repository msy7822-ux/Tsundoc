"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuModalContainer } from "./menu-modal/menu-modal-comtainer";
import { User } from "@clerk/nextjs/dist/types/server/clerkClient";

export function HeaderIcon({ user }: { user: User }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const borderStyle = isOpenMenu ? "border-main/50" : "border-white";

  return (
    <div className="relative">
      <MenuModalContainer
        user={user}
        isOpen={isOpenMenu}
        close={() => setIsOpenMenu(false)}
      />
      <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <Image
          src={user.profileImageUrl}
          alt=""
          className={`inline-block border-4 ${borderStyle} _transition-colors rounded-[50%]`}
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
