"use client";

// import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";

export function SignupComponent() {
  // const router = useRouter();
  const { signUp } = useSignUp();

  const handleSignup = async (strategy: OAuthStrategy) => {
    try {
      if (signUp) {
        await signUp.authenticateWithRedirect({
          strategy: strategy,
          redirectUrl: "/sso-callback",
          redirectUrlComplete: "/",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-center gap-4">
        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup("oauth_google")}
        >
          Googleアカウントで新規登録
        </button>

        <button
          type="button"
          className="auth-button"
          onClick={() => handleSignup("oauth_github")}
        >
          GitHubアカウントで新規登録
        </button>
      </div>

      <div className="w-full text-center text-xs">
        新規登録できない場合は、すでにアカウントが存在している可能性があります。
        <div>
          その場合は、
          <Link
            href="/auth/login"
            className="cursor-pointer font-sans font-bold text-sky-800"
          >
            こちらからログイン
          </Link>
          してください
        </div>
      </div>
    </div>
  );
}
