"use client";

import { ArticleType } from "@/types/article";
import { Thumbnail } from "../thumbnail";
import Link from "next/link";
import { ArticleSettingButton } from "../article-setting-button";

type Props = {
  article: ArticleType;
};

export function ArticleCard({ article }: Props) {
  return (
    <div className="relative">
      <div
        className="
          inline-block w-full max-w-[300px] rounded-md border
          px-3 py-4 shadow-md sm:w-[250px]
        "
      >
        <div className="relative flex flex-col items-start gap-5">
          <div className="absolute right-0 top-0 flex items-center gap-2">
            <ArticleSettingButton></ArticleSettingButton>
          </div>

          <div
            className="
              inline-block max-w-[150px] overflow-hidden
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
