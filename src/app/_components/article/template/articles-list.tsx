import { ArticleType } from "@/types/article";
import { ArticleCard } from "./article-card";

export function ArticlesList({
  userArticles,
}: {
  userArticles: ArticleType[];
}) {
  return (
    <div>
      {userArticles.map((article, i) => {
        return (
          <div key={i}>
            <ArticleCard article={article}></ArticleCard>
          </div>
        );
      })}
    </div>
  );
}
