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
          h-60 w-60 rounded-full border-2
          bg-main shadow-2xl 2xl:right-200
        "
      onClick={handleOnClick}
    >
      <span className="mt-5 inline-block">
        <AiOutlineFolderAdd fontSize={30} color="#fff"></AiOutlineFolderAdd>
      </span>
    </button>
  );
}
