"use client";

import { updateAccessCount } from "@/actions/supabase/articles";
import { ArticleType } from "@/types/article";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { tv } from "tailwind-variants";
import { ArticleSettingButton } from "../article-setting-button";
import { ArticleLabael } from "../label";
import { Thumbnail } from "../thumbnail";
import { ArticleTitle } from "../title";

type Props = {
  article: ArticleType;
};

const cardWrapperStyle = tv({
  base: "inline-block w-full max-w-350 rounded-md border px-12 py-16 shadow-md sm:w-250",
  variants: {
    accessed: {
      true: "opacity-60",
    },
  },
});

export function ArticleCard({ article }: Props) {
  const router = useRouter();
  const handleOnClick = async () => {
    await updateAccessCount(article.id);
    router.refresh();
  };

  return (
    <div className="relative">
      <div className={cardWrapperStyle({ accessed: article.accessCount > 0 })}>
        <div className="relative flex flex-col items-start gap-15">
          <div className="absolute right-0 top-0 flex items-center gap-16">
            <ArticleSettingButton></ArticleSettingButton>
          </div>

          <ArticleLabael labelText={article.domain}></ArticleLabael>
          <Link
            href={article.url}
            target="_blank"
            className="flex flex-col gap-12 hover:opacity-60"
            onClick={handleOnClick}
          >
            <ArticleTitle title={article.title}></ArticleTitle>
            <Thumbnail imageUrl={article.thumbnail}></Thumbnail>
          </Link>
        </div>
      </div>
    </div>
  );
}
