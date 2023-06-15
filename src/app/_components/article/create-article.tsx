"use client";

import { useState } from "react";
import { ErrorBlock } from "../common/error-block";
import { useUser } from "@clerk/nextjs";
import { CreateArticleModal } from "./create-article-modal";

export function CreateArticle() {
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);
  const { user } = useUser();

  if (!user) return null;

  return (
    <div>
      <ErrorBlock
        message={error ?? ""}
        isDisplay={!!error && error !== ""}
      ></ErrorBlock>

      <CreateArticleModal
        siteUrl={siteUrl}
        setSiteUrl={setSiteUrl}
        isDisplay={isDisplayModal}
        setError={setError}
        close={() => setIsDisplayModal(false)}
      ></CreateArticleModal>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="my-5 rounded-md border px-5 py-2"
          onClick={() => setIsDisplayModal(true)}
          disabled={!user}
        >
          記事を登録する
        </button>
      </div>
    </div>
  );
}
