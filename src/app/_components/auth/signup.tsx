"use client";

import { useSignUp } from "@clerk/nextjs";

export function SignupComponent() {
  const { signUp } = useSignUp();

  const handleLogIn = async () => {
    if (signUp) {
      const res = await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
      debugger;
      console.log("response", res);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <button type="button" onClick={handleLogIn}>
        Sign in
      </button>
    </div>
  );
}
