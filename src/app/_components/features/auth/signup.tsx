"use client";

import { signup } from "@/actions/supabase/auth";

export function SignupComponent() {
  // const { signInWithGithub, error } = useAuth();
  const handleOnClick = async () => {
    await signup();
  };

  return (
    <>
      {/* {error && <p>{error}</p>} */}
      <button type="button" onClick={handleOnClick}>
        Github Signup
      </button>
    </>
  );
}
