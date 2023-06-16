"use client";

import { ArticleType } from "@/types/article";
import Link from "next/link";
import { ArticleSettingButton } from "../article-setting-button";
import { Thumbnail } from "../thumbnail";

type Props = {
  article: ArticleType;
};

export function ArticleCard({ article }: Props) {
  console.log(article.thumbnail);
  return (
    <div className="relative">
      <div
        className="
        max-w-300 inline-block w-full rounded-md border
        px-3 py-4 shadow-md sm:w-250
        "
      >
        <div className="relative flex flex-col items-start gap-5">
          <div className="absolute right-0 top-0 flex items-center gap-2">
            <ArticleSettingButton></ArticleSettingButton>
          </div>

          <div
            className="
              max-w-150 inline-block overflow-hidden
              text-ellipsis whitespace-nowrap rounded-md
              bg-main px-4 py-1 text-xs
              text-white shadow-md
            "
          >
            {article.domain}
          </div>
          <Link
            href={article.url}
            target="_blank"
            className="flex flex-col gap-3 hover:opacity-60"
          >
            <h3 className="text-sm">{article.title ?? ""}</h3>
            <Thumbnail imageUrl={article.thumbnail}></Thumbnail>
          </Link>
        </div>
      </div>
    </div>
  );
}
