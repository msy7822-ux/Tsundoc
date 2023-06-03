"use client";

import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

export function SignupComponent() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const notify = () => toast("新規登録に失敗しました。");

  const handleSignup = async () => {
    try {
      if (signUp) {
        await signUp.authenticateWithRedirect({
          strategy: "oauth_github",
          redirectUrl: "/sso-callback",
          redirectUrlComplete: "/",
        });
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      notify();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <ToastContainer></ToastContainer>
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
