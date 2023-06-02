"use client";

import { createBook } from "@/actions/book";
import { EmojiPickerComponent } from "@/app/_components/emoji-picker";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export function CreateForm({ userId }: { userId: string }) {
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const [bookTitle, setBookTitle] = useState("");
  const router = useRouter();
  const notify = (text: string) => toast(text);

  const handleSubmit = async () => {
    await createBook({ title: bookTitle, userId });
    router.refresh();
    clearState();
    notify("書籍を登録しました。");
  };

  const clearState = () => {
    setBookTitle("");
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      {isOpenEmoji && <EmojiPickerComponent></EmojiPickerComponent>}
      <button
        type="button"
        className="border rounded-md shadow-sm py-2 px-8"
        onClick={() => setIsOpenEmoji(!isOpenEmoji)}
      >
        {!isOpenEmoji ? "絵文字を設定する" : "閉じる"}
      </button>

      <div>
        <label>タイトル</label>
        <input
          className="border block rounded-md shadow-sm py-4 px-2 w-full"
          type="text"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="border rounded-md py-2 px-8 cursor-pointer"
        onClick={handleSubmit}
        disabled={!bookTitle}
      >
        書籍を登録する
      </button>
    </div>
  );
}
