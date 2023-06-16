import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ClientModalCloseButton } from "../common/modal/client-modal-close-button";
import { Modal } from "../common/modal/modal";
import { ModalInner } from "../common/modal/modal-inner";
import { registerArticles } from "@/actions/supabase/articles";

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
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSiteUrl(event.target.value);
  };

  return (
    <Modal>
      <ModalInner>
        <ClientModalCloseButton close={close}></ClientModalCloseButton>
        <input
          type="text"
          value={siteUrl}
          onChange={handleOnChangeSiteUrl}
          className="rounded-md border px-2 py-3"
        />
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="my-5 rounded-md border px-5 py-2"
            onClick={handleSubmit}
            disabled={!user}
          >
            登録する
          </button>
        </div>
      </ModalInner>
    </Modal>
  );
}
