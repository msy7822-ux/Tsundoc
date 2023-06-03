"use client";

import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export function EmojiPickerComponent() {
  return (
    <div className="relative">
      <div className="z-30 fixed top-[90px] left-1/2 -translate-x-1/2">
        <div className="shadow-lg rounded-lg">
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
