import { ArticleType } from "@/types/article";
import { createClient } from "@supabase/supabase-js";
import { cache } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const generateSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {});
};

const supabase = generateSupabaseClient();

// upload to storage
export const uploadToStorage = async (
  file: Blob,
  userId: string,
  articleUUID: string
) => {
  try {
    const { data, error } = await supabase.storage
      .from("og-images")
      .upload(`public/${userId}/${articleUUID}.png`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// cacheメソッドでラップすることで、キャッシュを有効にする
export const getArticles = cache(async (userId: string) => {
  const { data, error } = await supabase
    .from("articles")
    .select()
    .eq("register_id", userId)
    .order("created_at", { ascending: false });

  const articles = data as ArticleType[];

  if (error || !data) throw new Error(error?.message ?? "エラーが発生しました");

  return articles;
});
