import { getArticles } from "@/lib/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ArticlesList } from "../components/features/article/template/articles-list";
import { CreateArticle } from "../components/features/article/template/create-article/create-article";

export async function TopArticles() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // for perfomance calclate
  const now = Date.now();

  console.log("session", session);
  if (!session?.user) return <></>;

  const userArticles = await getArticles(session.user.id);

  console.log("userArticles", userArticles);
  console.log("getArticles calcurated time", Date.now() - now);
  return (
    <>
      <CreateArticle
        user={session.user}
        isDisplay={!!session?.user}
      ></CreateArticle>
      <ArticlesList userArticles={userArticles ?? []}></ArticlesList>
    </>
  );
}
