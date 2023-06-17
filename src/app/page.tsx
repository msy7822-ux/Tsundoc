import { getArticles } from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs";
import { CreateArticle } from "./_components/article/create-article";
import { ArticlesList } from "./_components/article/template/articles-list";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export default async function Home() {
  const user = await currentUser();
  const userArticles = await getArticles(user?.id ?? "");

  return (
    <main className="">
      <CreateArticle isDisplay={!!user}></CreateArticle>
      <ArticlesList userArticles={userArticles ?? []}></ArticlesList>
    </main>
  );
}
