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
          w-[280px] border inline-block
          rounded-md py-4 px-3 shadow-md
        "
      >
        <div className="flex flex-col gap-5 items-start relative">
          <div className="flex items-center gap-2 absolute top-0 right-0">
            <ArticleSettingButton></ArticleSettingButton>
          </div>

          <div
            className="
          inline-block py-1 px-4
          rounded-md shadow-md bg-main
          text-white text-xs
          "
          >
            {article.domain}
          </div>
          <Link
            href={article.url}
            target="_blank"
            className="hover:opacity-60 flex flex-col gap-3"
          >
            <h3 className="text-sm">{article.title ?? ""}</h3>
            <Thumbnail imageUrl={article.thumbnail}></Thumbnail>
          </Link>
        </div>
      </div>
    </div>
  );
}
