"use server";

import { fetchOgpImage, fetchTitleInfo } from "@/lib/ext-metadata";
import { generateSupabaseClient } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function registerArticles(siteUrl: string, userId: string) {
  const ogImageUrl = await fetchOgpImage(siteUrl);
  const title = await fetchTitleInfo(siteUrl);

  const domain = new URL(siteUrl).hostname;

  const supabase = await generateSupabaseClient();
  const { data, error } = await supabase.from("documents").insert({
    id: uuidv4(),
    thumbnail: ogImageUrl,
    register_id: userId,
    url: siteUrl,
    title: title,
    domain: domain,
  });

  if (error) throw console.error(error);

  return data;
}
