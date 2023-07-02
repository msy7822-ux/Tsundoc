import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabaseClient = createMiddlewareClient({
    req,
    res,
  });

  await supabaseClient.auth.getSession();

  return res;
}
