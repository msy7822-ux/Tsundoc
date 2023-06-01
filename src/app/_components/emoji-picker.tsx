"use client";

import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export function EmojiPickerComponent() {
  return (
    <div>
      <Picker />
    </div>
  );
}
