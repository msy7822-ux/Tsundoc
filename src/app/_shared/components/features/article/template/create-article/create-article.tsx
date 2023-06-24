"use client";

import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { ErrorBlock } from "../../../../common/error-block";
import { OpenCreateArticleButton } from "./buttons/open-create-article-button";
import { CreateArticleModal } from "./create-article-modal";

type Props = {
  user: User;
  isDisplay: boolean;
};

export function CreateArticle({ user, isDisplay }: Props) {
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);

  // Modal open時にスクロールを禁止する
  useEffect(() => {
    if (isDisplayModal) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDisplayModal]);

  if (!isDisplay) return null;

  return (
    <>
      <ErrorBlock
        message={error ?? ""}
        isDisplay={!!error && error !== ""}
        close={() => setError(null)}
      ></ErrorBlock>

      <div className="mx-auto mb-10 w-full max-w-350 sm:max-w-5xl">
        <CreateArticleModal
          user={user}
          siteUrl={siteUrl}
          setSiteUrl={setSiteUrl}
          isDisplay={isDisplayModal}
          setError={setError}
          close={() => setIsDisplayModal(false)}
        ></CreateArticleModal>
      </div>

      <div className="fixed bottom-30 right-20 z-40 lg:absolute lg:-right-8 lg:bottom-0">
        <OpenCreateArticleButton
          handleOnClick={() => setIsDisplayModal(true)}
        ></OpenCreateArticleButton>
      </div>
    </>
  );
}
