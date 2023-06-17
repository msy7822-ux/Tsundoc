"use client";

import { registerArticles } from "@/actions/supabase/articles";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ClientModalCloseButton } from "../../common/modal/client-modal-close-button";
import { Modal } from "../../common/modal/modal";
import { ModalInner } from "../../common/modal/modal-inner";
import { ResetButton } from "./buttons/reset-button";

type Props = {
  siteUrl: string;
  setSiteUrl: (value: string) => void;
  setError: (value: string) => void;
  isDisplay: boolean;
  close: () => void;
};

export function CreateArticleModal({
  siteUrl,
  setSiteUrl,
  setError,
  isDisplay,
  close,
}: Props) {
  const router = useRouter();
  const { user } = useUser();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  if (!isDisplay) return null;

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

  const handleOnChangeSiteUrl = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSiteUrl(event.target.value);
  };

  const handleOnClickToPaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        if (inputRef.current) inputRef.current.value = text;
        setSiteUrl(text);
        console.log("ペーストされたテキスト: ", text);
      })
      .catch((err) => {
        console.error("ユーザが拒否、もしくはなんらかの理由で失敗", err);
      });
  };

  const handleOnResetTextarea = () => {
    setSiteUrl("");
  };

  return (
    <Modal>
      <ModalInner>
        <ClientModalCloseButton close={close}></ClientModalCloseButton>
        <div className="mt-20 flex flex-col gap-20">
          <textarea
            value={siteUrl}
            onChange={handleOnChangeSiteUrl}
            className="
              relative resize-none rounded-md
              border px-2 py-3
              text-xs sm:text-sm
            "
            ref={inputRef}
          ></textarea>

          <div>
            <button
              type="button"
              className="rounded-md border px-5 py-2"
              onClick={handleSubmit}
              disabled={!user}
            >
              登録する
            </button>

            <button
              type="button"
              className="rounded-md border px-5 py-2"
              onClick={handleOnClickToPaste}
              disabled={!user}
            >
              ペースト
            </button>

            <ResetButton
              handleOnClick={handleOnResetTextarea}
              isDisabled={!user}
            ></ResetButton>
          </div>
        </div>
      </ModalInner>
    </Modal>
  );
}
