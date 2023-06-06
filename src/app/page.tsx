import React from "react";
import { currentUser } from "@clerk/nextjs";
import { CreateArticle } from "./_components/article/create-article";
import { generateSupabaseClient } from "@/lib/supabase";
import { ArticlesList } from "./_components/article/template/articles-list";

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

  const userArticles = data?.map((article) => {
    return {
      title: article.title,
      domain: article.domain,
      url: article.url,
      thumbnail: article.thumbnail,
      isCompleted: article.is_completed,
      content: article.content,
    };
  });

  return (
    <main className="">
      <CreateArticle></CreateArticle>
      <ArticlesList userArticles={userArticles}></ArticlesList>
    </main>
  );
}
