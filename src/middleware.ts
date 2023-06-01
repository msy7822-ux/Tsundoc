// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import type { Database } from "./types/schema";
import { NextResponse, NextRequest } from "next/server";
import { generateSupabaseClient } from "./lib/supabase";

// middlewareでアクセス制限をかける
const ACCESSABLE_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/auth/login`,
  `${process.env.NEXT_PUBLIC_URL}/auth/signup`,
  `${process.env.NEXT_PUBLIC_URL}/intro`,
  `${process.env.NEXT_PUBLIC_URL}/`,
];

export async function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  const client = await generateSupabaseClient();
  await client.auth.getSession();
  return res;
}
