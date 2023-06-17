"use client";

import { deleteArticles } from "@/actions/supabase/articles";
import { useRouter } from "next/navigation";
import { BsTrash3 } from "react-icons/bs";

type Props = {
  articleId: string;
  userId: string | null;
};

export function ArticleTrashButton({ userId, articleId }: Props) {
  const router = useRouter();

  if (!userId) return null;

  const handleOnClickTrashButton = async () => {
    await deleteArticles(articleId);
    router.refresh();
  };

  return (
    <button
      type="button"
      className="inline-block"
      onClick={handleOnClickTrashButton}
    >
      <BsTrash3></BsTrash3>
    </button>
  );
}
