import { getSessionForServerComp } from "@/lib/auth/server/session";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import Link from "next/link";
import { HeaderIcon } from "./header-icon";
// import { UserButton } from "@clerk/nextjs";

export async function HeaderNav() {
  const session = await getSessionForServerComp(cookies);
  return !!session?.user ? (
    <AuthorizedNav user={session.user} />
  ) : (
    <NoAuthorizedNav />
  );
}

function AuthorizedNav({ user }: { user: User }) {
  return (
    <ul className="flex items-center gap-12 text-main">
      <li>
        <HeaderIcon user={user}></HeaderIcon>
      </li>
    </ul>
  );
}

function NoAuthorizedNav() {
  return (
    <ul className="flex items-center gap-12 text-main">
      <li>
        <Link href="/users/login">ログイン</Link>
      </li>
    </ul>
  );
}
