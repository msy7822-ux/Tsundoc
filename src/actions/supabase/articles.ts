"use server";

import { fetchOgpImage, fetchTitleInfo } from "@/lib/ext-metadata";
import { fetchFileObject } from "@/lib/file";
import { generateSupabaseClient, uploadToStorage } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function registerArticles(siteUrl: string, userId: string) {
  const title = await fetchTitleInfo(siteUrl);
  const ogImageUrl = await fetchOgpImage(siteUrl);
  const blob = await fetchFileObject(ogImageUrl ?? "");
  const supabase = generateSupabaseClient();

  const uuid = uuidv4();
  const res = await uploadToStorage(blob, userId, uuid);
  const path = res ? res.path : "";
  const domain = new URL(siteUrl).hostname;

  const { data: image } = supabase.storage.from("og-images").getPublicUrl(path);
  const imageUrl = image.publicUrl;

  const { data, error } = await supabase.from("articles").insert({
    id: uuid,
    thumbnail: ogImageUrl,
    register_id: userId,
    url: siteUrl,
    title: title,
    domain: domain,
    storage_url: imageUrl,
  });

  if (error) throw console.error(error);

  return data;
}

export const updateAccessCount = async (articleId: string) => {
  const supabase = generateSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .update({ access_count: 1 })
    .eq("id", articleId);

  if (error) throw console.error(error);

  return data;
};

export async function deleteArticles(id: string) {
  const supabase = generateSupabaseClient();
  const { data, error } = await supabase.from("articles").delete().eq("id", id);

  if (error) throw console.error(error);

  return data;
}
