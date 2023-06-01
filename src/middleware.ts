import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// middlewareでアクセス制限をかける
const ACCESSABLE_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/auth/login`,
  `${process.env.NEXT_PUBLIC_URL}/auth/signup`,
  `${process.env.NEXT_PUBLIC_URL}/intro`,
  `${process.env.NEXT_PUBLIC_URL}/`,
];

export default authMiddleware({
  afterAuth(auth, req, _evt) {
    if (ACCESSABLE_LIST.includes(req.url)) return;

    // clerkとsupabaseの認証情報を同期させる

    console.log("auth", auth);
    const signInUrl = new URL("/auth/signup", req.url);
    if (!auth.sessionId && !auth.userId)
      return NextResponse.redirect(signInUrl);
  },
  // afterAuth(auth, req, _evt) {
  //   // handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     const signInUrl = new URL("/login", req.url);
  //     signInUrl.searchParams.set("redirect_url", req.url);
  //     return NextResponse.redirect(signInUrl);
  //   }
  //   // rededirect them to organization selection page
  //   if (!auth.orgId && req.nextUrl.pathname !== "/org-selection") {
  //     const orgSelection = new URL("/", req.url);
  //     return NextResponse.redirect(orgSelection);
  //   }
  // },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
