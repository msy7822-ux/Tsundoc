"use client";

import { updateAccessCount } from "@/actions/supabase/articles";
import { ArticleType } from "@/types/article";
import { User } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { tv } from "tailwind-variants";
import { ArticleTrashButton } from "../article-trash-button";
import { ArticleLabael } from "../label";
import { Thumbnail } from "../thumbnail";
import { ArticleTitle } from "../title";

type Props = {
  article: ArticleType;
  user: User | null;
};

const cardWrapperStyle = tv({
  base: "inline-block w-full max-w-350 rounded-md border px-12 py-16 shadow-md sm:w-250",
  variants: {
    accessed: {
      true: "opacity-60",
    },
  },
});

export function ArticleCard({ article, user }: Props) {
  const router = useRouter();

  const handleOnClick = async () => {
    await updateAccessCount(article.id);
    router.refresh();
  };

  return (
    <div className="relative">
      <div className={cardWrapperStyle({ accessed: article.access_count > 0 })}>
        <div className="relative flex flex-col items-start gap-15">
          <div className="absolute right-0 top-0 flex items-center gap-16">
            <ArticleTrashButton
              articleId={article.id}
              userId={user?.id ?? null}
            ></ArticleTrashButton>
          </div>

          <ArticleLabael labelText={article.domain}></ArticleLabael>
          <Link
            href={article.url}
            target="_blank"
            className="flex flex-col gap-12 hover:opacity-60"
            onClick={handleOnClick}
          >
            <ArticleTitle title={article.title}></ArticleTitle>
            <Thumbnail imageUrl={article.storage_url}></Thumbnail>
          </Link>
        </div>
      </div>
    </div>
  );
}
