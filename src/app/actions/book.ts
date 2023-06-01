"use server";

import { supabase } from "../../lib/supabase";

export async function createBook() {
  const { data, error } = await supabase.from("books").select();
  console.log("createBook", data);
}
