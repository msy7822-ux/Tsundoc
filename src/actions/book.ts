"use server";

import { generateSupabaseClient } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function createBook({
  title,
  userId,
}: {
  title: string;
  userId: string;
}) {
  const supabase = await generateSupabaseClient();
  const { error } = await supabase
    .from("books")
    .insert({ id: uuidv4(), title: title, register_id: userId });

  if (error) throw Error(error.message);
}
