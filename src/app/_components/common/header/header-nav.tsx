import { SignInButton, SignedOut, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export async function HeaderNav() {
  const { userId, user } = auth();

  console.log("user id", userId);
  console.log("user", user);

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
