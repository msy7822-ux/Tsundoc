"use client";

import { useRouter } from "next/navigation";
import { signUp } from "@/lib/supabase";
import Link from "next/link";

export function SignupComponent() {
  const router = useRouter();

  const handleSignup = async () => {
    // await signUp();
    // if (signUp) {
    //   await signUp.authenticateWithRedirect({
    //     strategy: strategy,
    //     redirectUrl: "/sso-callback",
    //     redirectUrlComplete: "/",
    //   });
    // }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-center gap-4">
        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup()}
        >
          Googleアカウントで新規登録
        </button>

        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup()}
        >
          GitHubアカウントで新規登録
        </button>
      </div>

      <div className="text-xs w-full text-center">
        新規登録できない場合は、すでにアカウントが存在している可能性があります。
        <div>
          その場合は、
          <Link
            href="/auth/login"
            className="cursor-pointer text-sky-800 font-bold font-sans"
          >
            こちらからログイン
          </Link>
          してください
        </div>
      </div>
    </div>
  );
}
