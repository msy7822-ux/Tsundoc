"use server";

import { generateSupabaseClient } from "../lib/supabase";

export async function createBook() {
  const supabase = await generateSupabaseClient();
  const { data, error } = await supabase.from("books").select();
  console.log("createBook", data);
}
