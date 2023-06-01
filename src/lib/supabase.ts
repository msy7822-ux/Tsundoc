import { auth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_PROJECT_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? "";

export const generateSupabaseClient = async () => {
  const { getToken } = auth();
  const supabaseAccessToken = await getToken();
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  });
};

export const getAllBooks = async () => {
  const client = await generateSupabaseClient();
  const { data, error } = await client.from("books").select();
  return { data, error };
};
