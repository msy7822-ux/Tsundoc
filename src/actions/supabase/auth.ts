"use server";

import { generateSupabaseClient } from "@/lib/supabase";

const supabase = generateSupabaseClient();
1;

export const signup = async () => {
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  console.log("data", data);
};
