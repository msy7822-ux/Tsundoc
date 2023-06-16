"use server";

import { fetchOgpImage, fetchTitleInfo } from "@/lib/ext-metadata";
import { fetchFileObject } from "@/lib/file";
import { generateSupabaseClient, uploadToStorage } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function registerArticles(siteUrl: string, userId: string) {
  const title = await fetchTitleInfo(siteUrl);
  const ogImageUrl = await fetchOgpImage(siteUrl);
  const blob = await fetchFileObject(ogImageUrl ?? "");

  const uuid = uuidv4();
  await uploadToStorage(blob, userId, uuid);

  const domain = new URL(siteUrl).hostname;

  const supabase = generateSupabaseClient();
  const { data, error } = await supabase.from("documents").insert({
    id: uuid,
    thumbnail: ogImageUrl,
    register_id: userId,
    url: siteUrl,
    title: title,
    domain: domain,
  });

  if (error) throw console.error(error);

  return data;
}

export async function deleteArticles(id: string) {
  const supabase = generateSupabaseClient();
  const { data, error } = await supabase
    .from("documents")
    .delete()
    .eq("id", id);

  if (error) throw console.error(error);

  return data;
}
