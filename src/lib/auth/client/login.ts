import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const login = async (provider: "github" | "google") => {
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      skipBrowserRedirect: true,
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (error) throw new Error(error.message);

  return data;
};
