import { ArticleType } from "@/types/article";
import { Thumbnail } from "../thumbnail";
import Link from "next/link";

type Props = {
  article: ArticleType;
};

export function ArticleCard({ article }: Props) {
  return (
    <div>
      {/* <ArticleLink siteUrl={article.url}></ArticleLink> */}
      <Link href={article.url} target="_blank">
        <Thumbnail imageUrl={article.thumbnail}></Thumbnail>
      </Link>
    </div>
  );
}
