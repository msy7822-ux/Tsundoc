import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

export async function HeaderNav() {
  const { userId } = auth();

  return userId ? <AuthorizedNav userId={userId} /> : <NoAuthorizedNav />;
}

function AuthorizedNav({ userId }: { userId: string }) {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li>
        <Link href={`/users/${userId}`}>
          <span className="flex items-center gap-2">
            <FiUser fontSize={20} />
            <span>mypage</span>
          </span>
        </Link>
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
