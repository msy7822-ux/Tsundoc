import Link from "next/link";
import { HeaderIcon } from "./header-icon";
import { User } from "@clerk/nextjs/dist/types/server/clerkClient";
import { getCurrentUser } from "@/lib/clerk";

export async function HeaderNav() {
  const user = await getCurrentUser();

  return !!user || user === "undefined" ? (
    <AuthorizedNav user={user} />
  ) : (
    <NoAuthorizedNav />
  );
}

function AuthorizedNav({ user }: { user: User }) {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li>
        <HeaderIcon user={user}></HeaderIcon>
      </li>
    </ul>
  );
}

function NoAuthorizedNav() {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
    </ul>
  );
}
