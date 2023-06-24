"use client";

import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";
import { MenuModalContainer } from "./menu-modal/menu-modal-comtainer";

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
          src={user.user_metadata.avatar_url}
          alt=""
          className={`inline-block border-4 ${borderStyle} rounded-[50%] transition-colors`}
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
