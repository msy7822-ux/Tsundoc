import { getCurrentUser } from "@/lib/clerk";
import { getArticles } from "@/lib/supabase";
import { User } from "@clerk/nextjs/dist/types/server";
import { CreateArticle } from "../article/create-article/create-article";
import { ArticlesList } from "../article/template/articles-list";

export async function TopArticles() {
  // for perfomance calclate
  const now = Date.now();
  const user: User | null = await getCurrentUser();
  console.log("getCurrentUser calced time", Date.now() - now);

  const userArticles = await getArticles(user?.id ?? "");
  console.log("getArticles calced time", Date.now() - now);
  return (
    <>
      <CreateArticle isDisplay={!!user} user={user}></CreateArticle>
      <ArticlesList
        userArticles={userArticles ?? []}
        user={user}
      ></ArticlesList>
    </>
  );
}
