import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const generateSupabaseClient = async () => {
  return createClient(supabaseUrl, supabaseAnonKey, {});
};

export const getAllBooks = async () => {
  const client = await generateSupabaseClient();
  const { data, error } = await client.from("books").select();

  if (error) throw Error(error.message);

  return { data };
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
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "online",
        prompt: "consent",
      },
    },
  });

  if (error) throw Error(error.message);

  return { data };
  // supabase.auth;

  // if (user) {
  //   const { data, error } = await supabase
  //     .from('users')
  //     .insert([
  //       { id: user.id, email: user.email },
  //     ])
  // }
};
