import { ArticleType } from "@/types/article";
import { ArticleCard } from "./article-card";

export function ArticlesList({
  userArticles,
}: {
  userArticles: ArticleType[];
}) {
  return (
    // <div className="w-full max-w-3xl mx-auto">
    <div className="flex flex-wrap justify-around gap-3">
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
