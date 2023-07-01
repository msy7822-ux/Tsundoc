import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const login = async (provider: "github" | "google") => {
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
      skipBrowserRedirect: true,
    },
  });

  if (error) throw new Error(error.message);

  // window.open(data.url, undefined, "popup=false");
  location.href = data.url;

  return data;
};
