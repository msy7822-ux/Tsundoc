"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

// const supabase = generateSupabaseClient();
export function SignupComponent() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleOnClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: "https://tsun-doc.com/" },
      });
      // console.log("on click");
      // const data = await signup();
      router.refresh();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
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
