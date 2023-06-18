import { getArticles } from "@/lib/supabase";
import { CreateArticle } from "../article/create-article/create-article";
import { ArticlesList } from "../article/template/articles-list";

export async function TopArticles() {
  // for perfomance calclate
  const now = Date.now();
  // const user: User | null = await getCurrentUser();
  console.log("getCurrentUser calced time", Date.now() - now);

  const userArticles = await getArticles("user_2QjfdQKc2aZmyyV7wwtPWKl5t5e");
  console.log("getArticles calced time", Date.now() - now);
  return (
    <>
      <CreateArticle isDisplay={true}></CreateArticle>
      <ArticlesList
        userArticles={userArticles ?? []}
      ></ArticlesList>
    </>
  );
}
