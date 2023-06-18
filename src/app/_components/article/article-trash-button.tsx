"use client";

import { BsTrash3 } from "react-icons/bs";

type Props = {
  userId: string | null;
  handleOnClick: () => void;
};

export function ArticleTrashButton({ userId, handleOnClick }: Props) {
  if (!userId) return null;

  return (
    <button type="button" className="inline-block" onClick={handleOnClick}>
      <BsTrash3></BsTrash3>
    </button>
  );
}
