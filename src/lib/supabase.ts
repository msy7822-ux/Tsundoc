import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_PROJECT_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? "";

export const generateSupabaseClient = async () => {
  return createClient(supabaseUrl, supabaseAnonKey, {});
};

export const getAllBooks = async () => {
  const client = await generateSupabaseClient();
  const { data, error } = await client.from("books").select();
  return { data, error };
};

export const getUsers = async () => {
  const client = await generateSupabaseClient();
  // const { getToken } = auth();
  // const supabaseAccessToken = await getToken({ template: "supabase" });

  const { data, error } = await client.from("users").select();
  return { data, error };
};

export const signUp = async () => {
  const supabase = await generateSupabaseClient();
  supabase.auth.signInWithOAuth({ provider: "google" });
};
