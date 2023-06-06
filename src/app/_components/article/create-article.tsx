"use client";

import { registerArticles } from "@/actions/supabase/articles";
import { useState } from "react";
import { ErrorBlock } from "../common/error-block";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function CreateArticle() {
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const router = useRouter();

  const handleOnChangeSiteUrl = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSiteUrl(event.target.value);
  };

  const handleSubmit = async () => {
    if (!siteUrl || siteUrl === "") return setError("URLを入力してください");

    // FIXME: URLのバリデーションが未完成
    try {
      await registerArticles(siteUrl, user?.id ?? "");
      router.refresh();
    } catch (error) {
      setError("エラーが発生しました");
      console.error(error);
    }
  };

  return (
    <div>
      <ErrorBlock
        message={error ?? ""}
        isDisplay={!!error && error !== ""}
      ></ErrorBlock>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          value={siteUrl}
          onChange={handleOnChangeSiteUrl}
          className="border rounded-md py-3 px-2"
        />

        <button
          type="button"
          className="my-5 py-2 px-5 border rounded-md"
          onClick={handleSubmit}
        >
          記事を登録する
        </button>
      </div>
    </div>
  );
}
