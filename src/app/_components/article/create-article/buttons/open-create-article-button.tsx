"use client";

import { AiOutlineFolderAdd } from "react-icons/ai";

type Props = {
  handleOnClick: () => void;
};

export function OpenCreateArticleButton({ handleOnClick }: Props) {
  return (
    <button
      type="button"
      className="
          fixed bottom-30 right-20 z-40
          h-60 w-60 rounded-full
          bg-main shadow-2xl
        "
      onClick={handleOnClick}
    >
      <span className="inline-block mt-5">
        <AiOutlineFolderAdd fontSize={30} color="#fff"></AiOutlineFolderAdd>
      </span>
    </button>
  );
}
