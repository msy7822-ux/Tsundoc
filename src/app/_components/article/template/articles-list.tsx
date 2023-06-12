import { ArticleType } from "@/types/article";
import { ArticleCard } from "./article-card";

export function ArticlesList({
  userArticles,
}: {
  userArticles: ArticleType[];
}) {
  return (
    // <div className="w-full max-w-3xl mx-auto">
    <div
      className="
      grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 place-items-center gap-3
    "
    >
      {userArticles.map((article, i) => {
        return (
          <div key={i}>
            <ArticleCard article={article}></ArticleCard>
          </div>
        );
      })}
    </div>
    // </div>
  );
}
