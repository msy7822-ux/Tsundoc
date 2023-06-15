"use client";

import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export function LoginComponent() {
  const { signIn } = useSignIn();
  // const router = useRouter();

  const handleLogin = async (strategy: OAuthStrategy) => {
    if (signIn) {
      await signIn.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-center gap-3">
        <button
          type="button"
          className="auth-button"
          onClick={() => handleLogin("oauth_google")}
        >
          Googleアカウントでログイン
        </button>

        <button
          type="button"
          className="auth-button"
          onClick={() => handleLogin("oauth_github")}
        >
          GitHubアカウントでログイン
        </button>
      </div>

      <div className="w-full text-center text-xs">
        ログインできない場合は、
        <Link
          href="/auth/signup"
          className="cursor-pointer font-sans font-bold text-sky-800"
        >
          こちらから新規登録
        </Link>
        してください
      </div>
    </div>
  );
}
