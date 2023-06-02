import Link from "next/link";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";

export async function HeaderNav() {
  const user = await currentUser();

  return !!user ? (
    <AuthorizedNav userIcon={user.profileImageUrl ?? ""} userId={user.id} />
  ) : (
    <NoAuthorizedNav />
  );
}

function AuthorizedNav({
  userIcon,
  userId,
}: {
  userIcon: string;
  userId: string;
}) {
  return (
    <ul className="flex items-center gap-3 text-main">
      <li>
        <Link href={`/users/${userId}`}>
          <Image
            src={userIcon}
            alt=""
            className="inline-block border border-main rounded-[50%]"
            width={40}
            height={40}
          />
        </Link>
        {/* <Link href={`/users/${userId}`}>
          <span className="flex items-center gap-2">
            <FiUser fontSize={20} />
            <span>mypage</span>
          </span>
        </Link> */}
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
      {/* <li>
        <Link href="/auth/signup">Signup</Link>
      </li> */}
      <li>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
      </li>
    </ul>
  );
}
