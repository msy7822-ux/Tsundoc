import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// middlewareでアクセス制限をかける
const NOT_AUTHUSER_ACCESSABLE_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/api/supabase`,
  `${process.env.NEXT_PUBLIC_URL}/auth/login`,
  `${process.env.NEXT_PUBLIC_URL}/auth/signup`,
  `${process.env.NEXT_PUBLIC_URL}/intro`,
  `${process.env.NEXT_PUBLIC_URL}/`,
  `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
];

export default authMiddleware({
  afterAuth(auth, req, _evt) {
    // signin済みのユーザーはauthページに行けない

    if (NOT_AUTHUSER_ACCESSABLE_LIST.includes(req.url)) return;

    const signInUrl = new URL("/auth/login", req.url);

    if (!auth.sessionId && !auth.userId)
      return NextResponse.redirect(signInUrl);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
