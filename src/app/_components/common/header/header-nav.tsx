import { auth } from "@clerk/nextjs";
import Link from "next/link";

export async function HeaderNav() {
  const { userId } = auth();

  return userId ? <AuthorizedNav /> : <NoAuthorizedNav />;
}

function AuthorizedNav() {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li></li>
    </ul>
  );
}

function NoAuthorizedNav() {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
      <li>
        <Link href="/auth/signup">Signup</Link>
      </li>
      <li>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
      </li>
    </ul>
  );
}
