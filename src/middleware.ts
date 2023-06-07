import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// middlewareでアクセス制限をかける
const ROOT_PAGE = `${process.env.NEXT_PUBLIC_URL}/`;
const META_ROUTES_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
  `${process.env.NEXT_PUBLIC_URL}/icon`,
];

export default authMiddleware({
  beforeAuth(_req, _evt) {},
  ignoredRoutes: ["/api/supabase/create-user-profile"],
  publicRoutes: ["/", "/intro"],
  afterAuth(auth, req, _evt) {
    if (
      [...META_ROUTES_LIST, ROOT_PAGE].some((safe) => {
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
