import { getArticles } from "@/lib/supabase";
import { CreateArticle } from "../features/article/create-article/create-article";
import { ArticlesList } from "../features/article/template/articles-list";

export async function TopArticles() {
  // for perfomance calclate
  const now = Date.now();

  const userArticles = await getArticles("user_2QjfdQKc2aZmyyV7wwtPWKl5t5e");
  console.log("getArticles calced time", Date.now() - now);
  return (
    <>
      <CreateArticle isDisplay={true}></CreateArticle>
      <ArticlesList userArticles={userArticles ?? []}></ArticlesList>
    </>
  );
}
