"use client";

import { EmojiPickerComponent } from "@/app/_components/emoji-picker";
import { useState } from "react";

export function CreateForm() {
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="border rounded-md shadow-sm py-2 px-8"
        onClick={() => setIsOpenEmoji(!isOpenEmoji)}
      >
        絵文字を設定する
      </button>
      {isOpenEmoji && <EmojiPickerComponent></EmojiPickerComponent>}
    </div>
  );
}
