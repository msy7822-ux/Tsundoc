import { ArticleType } from "@/types/article";
import { User } from "@clerk/nextjs/dist/types/server";
import { ArticleCard } from "./article-card";

export function ArticlesList({
  userArticles,
  user,
}: {
  userArticles: ArticleType[];
  user: User | null;
}) {
  return (
    <div
      className="
      grid place-items-center gap-20
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      lg:place-items-start
    "
    >
      {userArticles.map((article, i) => {
        return (
          <div key={i}>
            <ArticleCard article={article} user={user}></ArticleCard>
          </div>
        );
      })}
    </div>
  );
}
