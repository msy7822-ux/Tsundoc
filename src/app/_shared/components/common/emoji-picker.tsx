"use client";

import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export function EmojiPickerComponent() {
  return (
    <div className="relative">
      <div className="fixed left-1/2 top-[90px] z-30 -translate-x-1/2">
        <div className="rounded-lg shadow-lg">
          <Picker
          // onEmojiClick={(event: React.MouseEvent<Element, MouseEvent>) => {
          //   console.log(event.target);
          // }}
          />
        </div>
      </div>
    </div>
  );
}
