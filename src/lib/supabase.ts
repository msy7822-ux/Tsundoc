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

const generateArticleObject = (userId: string, article: any) => {
  const imageUrl = getAnOgImage(userId, article.id);

  return {
    id: article.id,
    title: article.title,
    domain: article.domain,
    url: article.url,
    thumbnail: imageUrl,
    isCompleted: article.is_completed,
    content: article.content,
    accessCount: article.access_count,
  };
};

// cacheメソッドでラップすることで、キャッシュを有効にする
export const getArticles = cache(async (userId: string) => {
  const { data, error } = await supabase
    .from("documents")
    .select()
    .eq("register_id", userId)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) throw new Error(error.message);

  const articles = data?.map((article) => {
    return generateArticleObject(userId, article);
  });

  return articles;
});

export const getAnOgImage = (userId: string, articleUUID: string) => {
  const path = `public/${userId}/${articleUUID}.png`;
  const { data } = supabase.storage.from("og-images").getPublicUrl(path);
  const imageUrl = data.publicUrl;

  return imageUrl;
};
