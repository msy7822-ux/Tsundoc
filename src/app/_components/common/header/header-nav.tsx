import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { HeaderIcon } from "./header-icon";
import { User } from "@clerk/nextjs/dist/types/server/clerkClient";

export async function HeaderNav() {
  const user = await currentUser();

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
