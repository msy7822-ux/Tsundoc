import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// middlewareでアクセス制限をかける
const NOT_AUTHUSER_ACCESSABLE_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/api/supabase/create-user-profile`,
  `${process.env.NEXT_PUBLIC_URL}/intro`,
  `${process.env.NEXT_PUBLIC_URL}/`,
];

const AUTH_PAGE = `${process.env.NEXT_PUBLIC_URL}/auth`;

const META_ROUTES_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
  `${process.env.NEXT_PUBLIC_URL}/icon`,
];

export default authMiddleware({
  afterAuth(auth, req, _evt) {
    if (NOT_AUTHUSER_ACCESSABLE_LIST.includes(req.url)) return;

    if (
      [...META_ROUTES_LIST, AUTH_PAGE].some((safe) => {
        const regex = new RegExp(safe);
        return regex.test(req.url);
      })
    )
      return;

    const signInUrl = new URL("/auth/login", req.url);

    if (!auth.sessionId && !auth.userId)
      return NextResponse.redirect(signInUrl);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
