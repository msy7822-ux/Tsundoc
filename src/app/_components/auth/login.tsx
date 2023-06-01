"use client";

import Link from "next/link";

export function LoginComponent() {
  // const { signIn } = useSignIn();

  const handleLogin = async () => {
    // if (signIn) {
    //   await signIn.authenticateWithRedirect({
    //     strategy: strategy,
    //     redirectUrl: "/sso-callback",
    //     redirectUrlComplete: "/",
    //   });
    // }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-center gap-3">
        <button
          type="button"
          className="auth-button"
          onClick={() => handleLogin()}
        >
          Googleアカウントでログイン
        </button>

        <button
          type="button"
          className="auth-button"
          onClick={() => handleLogin()}
        >
          GitHubアカウントでログイン
        </button>
      </div>

      <div className="text-xs w-full text-center">
        ログインできない場合は、
        <Link
          href="/auth/signup"
          className="cursor-pointer text-sky-800 font-bold font-sans"
        >
          こちらから新規登録
        </Link>
        してください
      </div>
    </div>
  );
}
