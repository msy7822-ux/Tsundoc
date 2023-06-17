import { getCurrentUser } from "@/lib/clerk";
import { getArticles } from "@/lib/supabase";
import { User } from "@clerk/nextjs/dist/types/server";
import { CreateArticle } from "./_components/article/create-article/create-article";
import { ArticlesList } from "./_components/article/template/articles-list";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export const revalidate = 60;

export default async function Home() {
  const user: User | null = await getCurrentUser();
  const userArticles = await getArticles(user?.id ?? "");

  return (
    <main className="relative">
      <CreateArticle isDisplay={!!user} user={user}></CreateArticle>
      <ArticlesList
        userArticles={userArticles ?? []}
        user={user}
      ></ArticlesList>
    </main>
  );
}
