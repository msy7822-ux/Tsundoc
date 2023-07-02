"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function SignoutComponent() {
  const supabase = createClientComponentClient();

  return (
    <div>
      <form action="/auth/signout" method="post">
        <button
          className="block w-full rounded-md border px-12 py-5"
          type="submit"
          onClick={async () => {
            await supabase.auth.signOut();
          }}
        >
          ログアウト
        </button>
      </form>
    </div>
  );
}
