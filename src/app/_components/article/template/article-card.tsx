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
        inline-block w-full max-w-350 rounded-md
        border px-12 py-16 shadow-md sm:w-250
        "
      >
        <div className="relative flex flex-col items-start gap-15">
          <div className="absolute right-0 top-0 flex items-center gap-16">
            <ArticleSettingButton></ArticleSettingButton>
          </div>

          <div
            className="
              inline-block max-w-150 overflow-hidden
              text-ellipsis whitespace-nowrap rounded-md
              bg-main px-16 py-4 text-xs
              text-white shadow-md
            "
          >
            {article.domain}
          </div>
          <Link
            href={article.url}
            target="_blank"
            className="flex flex-col gap-12 hover:opacity-60"
          >
            <h3 className="text-sm">{article.title ?? ""}</h3>
            <Thumbnail imageUrl={article.thumbnail}></Thumbnail>
          </Link>
        </div>
      </div>
    </div>
  );
}
