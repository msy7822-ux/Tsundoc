import { HeaderContent } from "./header-content";

export function Header() {
  return (
    <div
      className="
      relative flex h-[80px] flex-col
      items-start justify-center border
      border-gray-100 p-3
      shadow-sm lg:p-0
    "
    >
      <HeaderContent></HeaderContent>
    </div>
  );
}
