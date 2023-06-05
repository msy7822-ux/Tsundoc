import React from "react";
import { currentUser } from "@clerk/nextjs";
import { CreateArticle } from "./_components/article/create-article";
import { generateSupabaseClient } from "@/lib/supabase";
import { ArticlesList } from "./_components/article/template/articles-list";
import { fetchTitleInfo } from "@/lib/ext-metadata";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export default async function Home() {
  const user = await currentUser();
  const supabase = await generateSupabaseClient();
  const { data, error } = await supabase
    .from("documents")
    .select()
    .eq("register_id", user?.id);

  if (error) throw new Error(error.message);

  console.log(
    await fetchTitleInfo("https://yokinist.me/supabase-upload-image")
  );

  const userArticles = data?.map((article) => {
    return {
      url: article.url,
      thumbnail: article.thumbnail,
    };
  });

  return (
    <main className="">
      <CreateArticle></CreateArticle>
      <ArticlesList userArticles={userArticles}></ArticlesList>
    </main>
  );
}
