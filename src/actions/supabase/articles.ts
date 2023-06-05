"use server";

import { fetchOgpImage } from "@/lib/ext-metadata";
import { generateSupabaseClient } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function registerArticles(siteUrl: string, userId: string) {
  const ogImageUrl = await fetchOgpImage(siteUrl);

  const supabase = await generateSupabaseClient();
  const { data, error } = await supabase.from("documents").insert({
    id: uuidv4(),
    thumbnail: ogImageUrl,
    register_id: userId,
    url: siteUrl,
  });

  if (error) throw console.error(error);

  return data;
}
